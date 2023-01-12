import { createListenerMiddleware } from "@reduxjs/toolkit";
import { toggleChange, updateAction } from "./reducer";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: toggleChange,
  effect: async (action, listenerapi) => {
    listenerapi.dispatch(updateAction({ formId: action.payload.formId }));
  },
});

export default listenerMiddleware;
