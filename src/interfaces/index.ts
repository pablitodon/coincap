export interface ICoinCap {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: number;
  vwap24Hr: string;
  explorer?: string;
}
export interface ICoinCapResponse {
  data: ICoinCap[];
  timestamp: number;
}
export interface ICoinCapInfoResponse {
  data: ICoinCap;
  timestamp: number;
}
