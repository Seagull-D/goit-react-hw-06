const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
  isFormVisible: false, // Додаємо стан для відображення форми
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

    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };

    case "TOGGLE_FORM_VISIBILITY":
      return {
        ...state,
        isFormVisible: !state.isFormVisible, // Правильний шлях
      };

    default:
      return state;
  }
};
