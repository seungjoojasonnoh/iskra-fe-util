export interface StaticChainInfo {
  id: number;
  name: string;
  baseCoinSymbol: string | undefined;
  displayName: string;
  backgroundColor: string;
  scopeUrl: string;
  txScopeUrl: string;
}

export interface StaticTokenInfo {
  name: string;
  explaination: string;
  symbol: string[];
  decimal: number;
  description: string;
}
