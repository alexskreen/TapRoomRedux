export default (state = {}, action) => {
  const { brewery, beer, beerType, ABV, pints, id } = action;
  switch (action.type) {
    case "ADD_KEG":
      return Object.assign({}, state, {
        [id]: {
          brewery: brewery,
          beer: beer,
          beerType: beerType,
          ABV: ABV,
          pints: pints,
          id: id,
        },
      });
    case "DELETE_KEG":
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;

    case "EDIT_KEG":
      return Object.assign({}, state, {
        [id]: {
          brewery: brewery,
          beer: beer,
          beerType: beerType,
          ABV: ABV,
          pints: pints,
          id: id,
        },
      });

    case "DRINK_PINT":
      return Object.assign({}, state, {
        [id]: {
          brewery: brewery,
          beer: beer,
          beerType: beerType,
          ABV: ABV,
          pints: pints -1,
          id: id,
        },
      });
  }
};
