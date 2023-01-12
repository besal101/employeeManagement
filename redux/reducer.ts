import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface FormState {
  toggleForm?: any;
  formId?: any;
  deleteId?: any;
}

// Define the initial state using that type
const initialState: FormState = {
  toggleForm: false,
  formId: null,
  deleteId: null,
};

export const ReducerSlice = createSlice({
  name: "crudapp",
  initialState,
  reducers: {
    toggleChange: (state, action: PayloadAction<FormState>) => {
      state.toggleForm = action.payload.toggleForm;
    },
    updateAction: (state, action: PayloadAction<FormState>) => {
      state.formId = action.payload.formId;
    },
    deleteAction: (state, action: PayloadAction<FormState>) => {
      state.deleteId = action.payload.deleteId;
    },
  },
});

export const { toggleChange, updateAction, deleteAction } =
  ReducerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getFormState = (state: RootState) => state.crudapp.toggleForm;
export const getFormId = (state: RootState) => state.crudapp.formId;
export const getDeleteId = (state: RootState) => state.crudapp.deleteId;

export default ReducerSlice.reducer;
