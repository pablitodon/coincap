export interface ICoinCap {
  id: string;
  rank: string; // Изменено на string
  symbol: string;
  name: string;
  supply: string; // Изменено на string
  maxSupply: string | null; // Изменено на string | null
  marketCapUsd: string; // Изменено на string
  volumeUsd24Hr: string; // Изменено на string
  priceUsd: string; // Изменено на string
  changePercent24Hr: number; // Оставлено как number
  vwap24Hr: string; // Изменено на string
}
export interface ICoinCapResponse {
  data: ICoinCap[];
  timestamp: number;
}
