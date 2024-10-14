import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface INameAndPrice {
    name?: string;
    price?: string | number;
    id?: string;
    amount?: string | number;
}


const initialState: INameAndPrice[] = JSON.parse(localStorage.getItem('wallet') || '[]');



export const addCoinToWalletSlice = createSlice({
    name: "addCoinWalletSlice",
    initialState,
    reducers: {
        addCoinToWallet: (state, action: PayloadAction<INameAndPrice>) => {
            const { id, amount, name, price } = action.payload;
            const existingItem = state.find(coin => coin.id === id);
            if (existingItem) {
                existingItem.amount = amount ? Number(existingItem.amount) + Number(amount) : existingItem.amount;
                existingItem.name = name;
                existingItem.price = price;
            } else {
                state.push(action.payload);
            }
            localStorage.setItem('wallet', JSON.stringify(state));
        },
        updateAmount: (state, action: PayloadAction<{ id: string; amount: string | number }>) => {
            const { id, amount } = action.payload;
            const parsedAmount = Number(amount);
            if (!isNaN(parsedAmount)) {
                const item = state.find(coin => coin.id === id);
                if (item) {
                    item.amount = parsedAmount + Number(item.amount);
                    localStorage.setItem('wallet', JSON.stringify(state));
                }
            }
        },
        removeCoinFromWallet: (state, action: PayloadAction<string>) => {
            const updatedState = state.filter(coin => coin.id !== action.payload);
            localStorage.setItem('wallet', JSON.stringify(updatedState));
            return updatedState;
        },

    }
})

export const { addCoinToWallet, updateAmount, removeCoinFromWallet } = addCoinToWalletSlice.actions;

export default addCoinToWalletSlice.reducer;