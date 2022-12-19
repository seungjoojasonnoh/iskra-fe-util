import { StaticChainInfo, StaticTokenInfo } from './model';

export const DEFAULT_DECIMAL_PLACE = 4;

export const ERROR_MESSAGE = {
  NUMBER_UTILITY: {
    EXCEEDS_RANGE: 'Exceeds number range',
    INVALID: 'Invalid number type',
  },
};

export const TokenConstant: Record<string, StaticTokenInfo> = {
  ISK: {
    decimal: 18,
    description: 'Native Token of ISKRA',
    name: 'ISK',
    symbol: ['ISK', 'isk', 'Isk'],
    explaination: 'ISKRA TOKEN',
  },
  KLAY: {
    decimal: 18,
    description: 'Native Token of Klaytn',
    name: 'KLAY',
    symbol: ['KLAY', 'Klay', 'klay'],
    explaination: 'Klaytn',
  },
  ETH: {
    decimal: 18,
    description: 'Native Token of Ethereum',
    name: 'ETH',
    symbol: ['ETH', 'Eth', 'eth'],
    explaination: 'Ethereum',
  },
  USDT: {
    decimal: 6,
    description: 'Native Token of Klaytn',
    name: 'USDT',
    symbol: ['USDT', 'usdt'],
    explaination: 'Tether USD',
  },
  IUSDT: {
    decimal: 6,
    description: 'Stablecoin pegged to the USD',
    name: 'iUSDT',
    symbol: ['iUSDT', 'IUSDT', 'iusdt'],
    explaination: 'Tether USD (Iskra bridge)',
  },
  OUSDT: {
    decimal: 6,
    description: 'Stablecoin pegged to the USD',
    name: 'oUSDT',
    symbol: ['oUSDT', 'OUSDT', 'ousdt'],
    explaination: 'Orbit Bridge Klaytn USD Tether',
  },
};

export const ChainConstant: Record<number, StaticChainInfo> = {
  1: {
    id: 1,
    name: 'ethereum',
    baseCoinSymbol: 'ETH',
    displayName: 'Ethereum',
    backgroundColor: '#525EFF',
    scopeUrl: 'https://etherscan.io/address',
    txScopeUrl: 'https://etherscan.io/tx',
  },
  8217: {
    id: 8217,
    name: 'cypress',
    baseCoinSymbol: 'KLAY',
    displayName: 'Mainnet (Klaytn)',
    backgroundColor: '#FF2899',
    scopeUrl: 'https://scope.klaytn.com/account',
    txScopeUrl: 'https://scope.klaytn.com/tx',
  },
  20222: {
    id: 20222,
    name: 'amethyst',
    baseCoinSymbol: undefined,
    displayName: 'Amethyst',
    backgroundColor: '#FF2899',
    scopeUrl: 'https://cypress.scan.iskra.world/address',
    txScopeUrl: 'https://baobab.scope.klaytn.com/tx',
  },
  1001: {
    id: 1001,
    name: 'baobab',
    baseCoinSymbol: 'KLAY',
    displayName: 'Mainnet (Klaytn)',
    backgroundColor: '#FF2899',
    scopeUrl: 'https://baobab.scope.klaytn.com/account',
    txScopeUrl: 'https://baobab.scope.klaytn.com/tx',
  },
  5: {
    id: 5,
    name: 'goerli',
    baseCoinSymbol: 'ETH',
    displayName: 'Goerli',
    backgroundColor: '#525EFF',
    scopeUrl: 'https://goerli.etherscan.io/address',
    txScopeUrl: 'https://goerli.etherscan.io/tx',
  },
  20221: {
    id: 20221,
    name: 'cerulean',
    baseCoinSymbol: undefined,
    displayName: 'Cerulean',
    backgroundColor: '#FF2899',
    scopeUrl: 'https://alpha-baobab.scan.iskra.world/address',
    txScopeUrl: 'https://baobab.scope.klaytn.com/tx',
  },
};
