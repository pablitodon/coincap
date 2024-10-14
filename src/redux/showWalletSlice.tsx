import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IShow {
    show: boolean
}


const initialState: IShow = {
    show: false,
};

export const showWalletSlice = createSlice({
    name: "showAndCloseWallet",
    initialState,
    reducers: {
        showAndCloseWallet: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload
        }
    }
})

export const { showAndCloseWallet } = showWalletSlice.actions;

export default showWalletSlice.reducer;