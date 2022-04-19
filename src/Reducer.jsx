const initialState = {
  arr: [],
  arr2: [],
  theme: false,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_arr":
      return { ...state, arr: [...action.payload] };
    case "empty_arr":
      return { ...state, arr: [] };
    case "asc_sort":
      return { ...state, arr: [...action.payload] };
    case "name_sort":
      return { ...state, arr: [...action.payload] };
    case "sort_items":
      return {
        ...state,
        arr: [
          ...state.arr.sort((a, b) => a.stargazers_count - b.stargazers_count),
        ],
      };
    case "sort_items2":
      return {
        ...state,
        arr: [
          ...state.arr.sort((a, b) => b.stargazers_count - a.stargazers_count),
        ],
      };
    case "sort_name":
      return {
        ...state,
        arr: [...state.arr.sort((a, b) => a.name.localeCompare(b.name))],
      };

    case "sort_name2":
      return {
        ...state,
        arr: [...state.arr.sort((a, b) => b.name.localeCompare(a.name))],
      };
    case "set_theme":
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      return state;
  }
};
