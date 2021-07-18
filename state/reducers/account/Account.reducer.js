import { ADD_CATEGORY, REMOVE_CATEGORY } from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (currentState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...currentState,
        categories: [
          ...currentState.categories,
          action.payload
        ],
      };
    case REMOVE_CATEGORY:
      // eslint-disable-next-line no-case-declarations
      const actualCategories = currentState.categories;
      const filteredCategories = actualCategories.filter(category => category.title !== action.payload.category)
      return {
        ...currentState,
        favorites: [
          ...filteredCategories
        ]
      };
    default:
      return currentState;
  }
};
