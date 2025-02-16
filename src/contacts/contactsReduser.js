const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "searchTerm":
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload,
        },
      };

    case "addContact":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };

    default:
      return state;
  }
};
