export interface NiftyIndex {
  spotPrice: number;
  lastClose: number;
  change: number;
  changePercent: number;
  dayHigh: number;
  dayLow: number;
  timestamp: number;
}

export interface OptionData {
  strikePrice: number;
  expiryDate: string;
  ce: {
    openInterest: number;
    changeInOI: number;
    volume: number;
    lastPrice: number;
    change: number;
    bid: number;
    ask: number;
    impliedVolatility: number;
  };
  pe: {
    openInterest: number;
    changeInOI: number;
    volume: number;
    lastPrice: number;
    change: number;
    bid: number;
    ask: number;
    impliedVolatility: number;
  };
}

export interface Greeks {
  delta: number;
  gamma: number;
  theta: number;
  vega: number;
  rho: number;
}

export interface StrategyLeg {
  type: 'CE' | 'PE';
  action: 'BUY' | 'SELL';
  strikePrice: number;
  premium: number;
  quantity: number;
}

export interface Strategy {
  id: string;
  name: string;
  legs: StrategyLeg[];
}

export interface OptionChainResponse {
  spotPrice: number;
  lastClose: number;
  change: number;
  changePercent: number;
  dayHigh: number;
  dayLow: number;
  data: OptionData[];
  expiryDates: string[];
}
