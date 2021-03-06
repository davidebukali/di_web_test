export interface PlotlyConfig {
  data: Plotly.Data[];
  layout: Plotly.Layout;
}

export interface PlotData {
  calcdata: CalcData[][];
  _fullData: Plotly.Data[];
  _fullLayout: Plotly.Layout;
}

export type PlotlyEnhancedHTMLElement = Plotly.PlotlyHTMLElement & PlotlyConfig & PlotData;

/**
 * Undocumented but accessible as part of the returned object by the newPlot or react promises
 * Contains a lot more options than are documented here
 */
export interface CalcData {
  trace: Plotly.Data;
}

export interface ChartOptions {
  title?: string;
  source?: string;
  aggregated: boolean;
  selectorIncludes?: string[];
  selectorExcludes?: string[];
  aggregationIncludes?: string[];
  aggregationExcludes?: string[];
  aggregateOptionLabel?: string;
  yAxisPrefix?: string;
  yAxisSuffix?: string;
  imageCaption?: string;
}
