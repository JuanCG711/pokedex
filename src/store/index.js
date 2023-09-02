import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./slice/trainer.slice";

export default configureStore({
    reducer:{
        trainer: trainerSlice
    }
})