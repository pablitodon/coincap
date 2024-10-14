import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IShow {
    show: boolean
}


const initialState: IShow = {
    show: false,
};

export const showModalSlice = createSlice({
    name: "showAndCloseModal",
    initialState,
    reducers: {
        showAndCloseModal: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload
        }
    }
})

export const { showAndCloseModal } = showModalSlice.actions;

export default showModalSlice.reducer;