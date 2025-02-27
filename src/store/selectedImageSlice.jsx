import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedImage: null,
    avatarImg: null,
};

const selectedImageSlice = createSlice({
    name: "selectedImage",
    initialState,
    reducers: {
        setSelectedImage: (state, action) => {
            state.selectedImage = action.payload;
        },
        setAvatarImg: (state, action) => {
            state.avatarImg = action.payload;
        },
        clearSelectedImage: (state) => {
            state.selectedImage = null;
            state.avatarImg = null;
        },
    },
});

export const { setSelectedImage, setAvatarImg, clearSelectedImage } = selectedImageSlice.actions;
export default selectedImageSlice.reducer;
