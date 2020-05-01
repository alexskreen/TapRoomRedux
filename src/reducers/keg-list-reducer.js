export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_KEG":
      const { brewery, beer, beerType, ABV, pints, id } = action;
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
    default:
      return state;
  }
};
