import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CoinIdState {
    coinId: string | null;
}

const initialState: CoinIdState = { coinId: null };

export const coinIdSlice = createSlice({
    name: "coinId",
    initialState,
    reducers: {
        setCoinId: (
            state,
            action: PayloadAction<string | null>
        ) => {
            state.coinId = action.payload;
        }
    }
})

export const { setCoinId } = coinIdSlice.actions;

export default coinIdSlice.reducer;