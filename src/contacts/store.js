import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsReduser";

export const store = configureStore({
  reducer: { contacts: contactsReducer },
});
