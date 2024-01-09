import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slice/todoSlice";

const store = configureStore({ reducer: todoReducer });

export default store
