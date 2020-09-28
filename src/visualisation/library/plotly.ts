import { Config, Data, Layout } from 'plotly.js';
import { DIChart } from './dicharts';
import { DIChartPlotlyOptions, ChartFilter, FilterData } from './utils';
import { PlotlyEnhancedHTMLElement } from '../types';
import deepmerge from 'deepmerge';

export const defaultConfig: Partial<Config> = {
  displayModeBar: true,
  responsive: true,
  showLink: false,
  plotlyServerURL: 'https://chart-studio.plotly.com',
  toImageButtonOptions: {
    width: 1200,
    height: 657,
  },
  modeBarButtonsToRemove: [
    'pan2d',
    'select2d',
    'lasso2d',
    'hoverClosestCartesian',
    'hoverCompareCartesian',
    'toggleSpikelines',
  ],
};

export class DIPlotlyChart extends DIChart {
  private options: DIChartPlotlyOptions;
  private data: Data[] = [];
  private layout: Partial<Layout> = {};
  private config: Partial<Config> = {};
  private plot?: PlotlyEnhancedHTMLElement;
  private sourceData?: { [key: string]: string }[];
  private filters: FilterData[] = [];

  constructor(chartNode: HTMLElement, options: DIChartPlotlyOptions) {
    super(chartNode);

    this.options = options;
  }

  getPlot = (): PlotlyEnhancedHTMLElement | undefined => {
    return this.plot;
  };

  setData = (data: Data[] = []): DIPlotlyChart => {
    this.data = data;

    return this;
  };

  setLayout = (layout: Partial<Layout> = {}): DIPlotlyChart => {
    this.layout = deepmerge(this.layout, layout);

    return this;
  };

  setConfig = (config: Partial<Config> = {}): DIPlotlyChart => {
    this.config = deepmerge(this.config, config);

    return this;
  };

  getConfig = (config: Partial<Config> = {}): Config => {
    return deepmerge(defaultConfig, config);
  };

  getOptions = (): DIChartPlotlyOptions => {
    return this.options;
  };

  setFilters = (filters: FilterData[]): void => {
    this.filters = filters;
  };

  getFilters = (): FilterData[] => {
    return this.filters;
  };

  csv = (url: string): Promise<{ [key: string]: string }[]> => {
    return new Promise((resolve) => {
      window.Plotly.d3.csv(url, (data) => {
        resolve(data);
      });
    });
  };

  updatePlot = (): Promise<{ plot: PlotlyEnhancedHTMLElement; config: DIChartPlotlyOptions }> => {
    if (!this.plot) {
      return this.newPlot(this.chartElement, this.data, this.layout, this.getConfig(this.config));
    }

    return window.Plotly.react(this.chartElement, this.data, this.layout, this.getConfig(this.config)).then(
      (plot: PlotlyEnhancedHTMLElement) => {
        this.addPlot(plot);
        this.hideLoading();

        return { plot, config: this.options };
      },
    );
  };

  setSourceData(data: { [key: string]: string }[]): DIPlotlyChart {
    this.sourceData = data;

    return this;
  }

  getSourceData(): { [key: string]: string }[] | undefined {
    return this.sourceData;
  }

  private addPlot(plot: PlotlyEnhancedHTMLElement): DIPlotlyChart {
    this.plot = plot;

    return this;
  }

  private newPlot(
    chartNode: HTMLElement,
    data: Data[],
    layout: Partial<Layout> = {},
    config: Partial<Config> = {},
  ): Promise<{ plot: PlotlyEnhancedHTMLElement; config: DIChartPlotlyOptions }> {
    return window.Plotly.newPlot(chartNode, data, layout, this.getConfig(config)).then(
      (plot: PlotlyEnhancedHTMLElement) => {
        if (!this.plot) {
          this.initWidgets();
        }
        this.addPlot(plot);
        this.hideLoading();

        return { plot, config: this.options };
      },
    );
  }

  private initWidgets() {
    const { widgets = {} } = this.options;
    if (widgets.filters) {
      widgets.filters.forEach((filter) => this.handleFilter(filter));
    }
  }

  private handleFilter(filter: ChartFilter) {
    const parent = this.getParentElement();
    if (parent) {
      const selectElement = parent.querySelector(`.${filter.className}`) as HTMLSelectElement | null;
      if (selectElement) {
        let { options } = filter;
        if (!options && filter.getOptions) {
          options = filter.getOptions(this);
        }
        if (options && options.length) {
          this.addFilter(selectElement, options || []);
          this.addFilterEvents(selectElement, filter);
          this.setFilters(this.filters.concat({ name: filter.className, value: [options[0]] }));
        }
      } else {
        throw new Error(`No element with class ${filter.className}`);
      }
    }
  }

  private addFilterEvents(element: HTMLSelectElement, filter: ChartFilter) {
    if (filter.onChange) {
      element.addEventListener('change', (event: MouseEvent) => {
        const { value } = <HTMLSelectElement>event.target;
        this.setFilters(
          this.filters.map((item) => {
            if (item.name === filter.className && item.value.indexOf(value) === -1) {
              item.value = filter.multi ? item.value.concat(value) : [value];
            }

            return item;
          }),
        );
        filter.onChange(event, this);
      });
    }
  }
}
