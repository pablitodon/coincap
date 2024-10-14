import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CoinIdState {
    coinId: string;
}

const initialState: CoinIdState = { coinId: '' };

export const coinIdSlice = createSlice({
    name: "coinId",
    initialState,
    reducers: {
        setCoinId: (
            state,
            action: PayloadAction<string>
        ) => {
            state.coinId = action.payload;
        }
    }
})

export const { setCoinId } = coinIdSlice.actions;

export default coinIdSlice.reducer;