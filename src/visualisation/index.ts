import 'core-js/stable';
import debounce from 'debounce';
import 'isomorphic-fetch';
import { PlotlyHTMLElement } from 'plotly.js';
import 'regenerator-runtime/runtime';
import { config } from './config';
import {
  getTreemapDataByLabel,
  showTraceByCondition,
  setDefaultTraceVisibility,
  showTraceByAggregationOption,
  addPrefixAndSuffix,
} from './data';
import { addLoading, removeLoading } from './loading';
import { loadPlotlyCode } from './modules';
import { addOptionsToSelectNode, createOptionsFromLegendData as createOptionsFromCalcData } from './options';
import { removeTitle, setDefaultColorway, updateLayoutColorway, addHoverTemplateToTraces } from './styles';
import { PlotlyConfig, PlotlyEnhancedHTMLElement, ChartOptions } from './types';

type Aggregated = 'True' | 'False' | undefined;

const initChart = (wrapper: HTMLElement) => {
  const chartNode = wrapper.getElementsByClassName('js-plotly-chart')[0] as HTMLDivElement | undefined;
  const selectNode = wrapper.getElementsByClassName('js-plotly-chart-data-selector')[0] as
    | HTMLSelectElement
    | undefined;
  const scriptNode = wrapper.getElementsByClassName('js-plotly-chart-raw-data')[0] as HTMLScriptElement | undefined;

  if (chartNode) {
    const data = scriptNode ? JSON.parse(scriptNode.innerHTML) : null; // TODO: surround in try/catch
    const url = chartNode.dataset.url;
    const aggregated = chartNode.dataset.aggregated as Aggregated;
    const aggregationExcludes = chartNode.dataset.aggregationExcludes;
    const aggregationIncludes = chartNode.dataset.aggregationIncludes;
    const selectorIncludes = chartNode.dataset.selectorIncludes;
    const selectorExcludes = chartNode.dataset.selectorExcludes;
    const aggregateOptionLabel = chartNode.dataset.aggregateOptionLabel;
    const yAxisPrefix = chartNode.dataset.yAxisPrefix;
    const yAxisSuffix = chartNode.dataset.yAxisSuffix;
    const minWidth = chartNode.dataset.minWidth ? parseInt(chartNode.dataset.minWidth) : 400; // TODO: use a constant
    const chartOptions: ChartOptions = {
      aggregated: aggregated === 'True',
      aggregationExcludes: aggregationExcludes?.trim() ? aggregationExcludes.split(',') : undefined,
      aggregationIncludes: aggregationIncludes?.trim() ? aggregationIncludes.split(',') : undefined,
      selectorExcludes: selectorExcludes?.trim() ? selectorExcludes.split(',') : undefined,
      selectorIncludes: selectorIncludes?.trim() ? selectorIncludes.split(',') : undefined,
      aggregateOptionLabel,
      yAxisPrefix,
      yAxisSuffix,
    };

    const init = async () => {
      // if window greater than min and chart not inited, init chart and set flag
      if (window.matchMedia(`(min-width: ${minWidth}px)`).matches) {
        addLoading(chartNode);

        if (url) {
          fetch(url).then((response) => {
            response.json().then((_data) => {
              if (selectNode) {
                initSelectableChart(chartNode, _data, selectNode, chartOptions);
              } else {
                initStaticChart(chartNode, _data, chartOptions);
              }
            });
          });
        } else {
          // raw data in the page is used for previewing and drafts
          if (selectNode) {
            initSelectableChart(chartNode, data, selectNode, chartOptions);
          } else {
            initStaticChart(chartNode, data, chartOptions);
          }
        }

        removelistener();
      }
    };
    window.addEventListener('resize', init);
    const removelistener = () => {
      window.removeEventListener('resize', init);
    };

    init();
  }
};

const initPlotlyCharts = () => {
  const wrappers = document.getElementsByClassName('js-plotly-chart-wrapper');

  if (wrappers.length) {
    for (let index = 0; index < wrappers.length; index++) {
      const wrapper = wrappers.item(index) as HTMLElement;

      if (wrapper && wrapper.classList.contains('js-lazy-loading')) {
        const bounds = wrapper.getBoundingClientRect();
        if (bounds.top + bounds.height > 0 && bounds.top - window.innerHeight <= 50) {
          wrapper.classList.remove('js-lazy-loading');
          initChart(wrapper);
        } else {
          const chartNode = wrapper.getElementsByClassName('js-plotly-chart')[0] as HTMLDivElement | undefined;
          if (chartNode) {
            addLoading(chartNode); // TODO: show placeholder image instead
          }
        }
      }
    }
  }
};

const initStaticChart = async (element: HTMLElement, chartConfig: PlotlyConfig, options: ChartOptions) => {
  try {
    const { data, layout } = chartConfig;

    const { react, relayout } = await loadPlotlyCode(data);
    removeLoading(element);
    removeTitle(layout);
    addHoverTemplateToTraces(data);
    setDefaultColorway(layout);
    addPrefixAndSuffix(data, options);
    react(element, data, layout, config).then((myPlot: PlotlyEnhancedHTMLElement) =>
      updateLayoutColorway(myPlot, relayout),
    );
  } catch (error) {
    console.log(error);
  }
};

const initSelectableChart = async (
  chartNode: HTMLElement,
  chartConfig: PlotlyConfig,
  selectNode: HTMLSelectElement,
  chartOptions: ChartOptions,
) => {
  try {
    const { aggregated } = chartOptions;
    const { data: _data, layout } = chartConfig;
    const { react, relayout } = await loadPlotlyCode(_data);
    const VIEW_ALL = chartOptions.aggregateOptionLabel || 'All data';
    let data = _data.slice();
    const traces = Array.from(data);
    const isTreemap = data[0].type === 'treemap';

    if (!isTreemap) {
      layout.showlegend = false;
    }
    setDefaultTraceVisibility(data, chartOptions);

    removeLoading(chartNode);
    removeTitle(layout);
    addHoverTemplateToTraces(data);
    addPrefixAndSuffix(data, chartOptions);
    setDefaultColorway(layout);

    if (isTreemap) {
      data = [traces[0]];
    }

    const updatePlot = (event: Event, plot: PlotlyHTMLElement & { data: Plotly.Data[] }) => {
      if (event.target) {
        const value = (event.target as HTMLSelectElement).value;
        if (isTreemap) {
          data = getTreemapDataByLabel(traces, selectNode.value);
          react(chartNode, data, layout);

          return;
        }
        const condition = (name: string): boolean => {
          if (value === VIEW_ALL) {
            const showTrace = showTraceByAggregationOption(name, chartOptions);

            return showTrace !== null ? showTrace : true;
          }

          return name === value;
        };
        const updatedData = showTraceByCondition(plot.data, condition);
        react(chartNode, updatedData, layout, config);
      }
    };

    react(chartNode, data, layout, config).then((myPlot: PlotlyEnhancedHTMLElement) => {
      updateLayoutColorway(myPlot, relayout);
      const options = createOptionsFromCalcData(myPlot._fullData, chartOptions);
      if (aggregated) {
        options.unshift(VIEW_ALL);
      }
      addOptionsToSelectNode(selectNode, options);
      selectNode.addEventListener('change', (event: Event) => updatePlot(event, myPlot), false);
    });
  } catch (error) {
    initStaticChart(chartNode, chartConfig, chartOptions);
  }
};

initPlotlyCharts();
window.addEventListener('scroll', debounce(initPlotlyCharts, 200));
