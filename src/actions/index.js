export const deleteKeg = (id) => ({
  type: "DELETE_KEG",
  id,
});

export const toggleForm = () => ({
  type: "TOGGLE_FORM",
});

export const addKeg = (keg) => {
  const { brewery, beer, beerType, ABV, pints, id } = keg;
  return {
    type: "ADD_Keg",
    brewery: brewery,
    beer: beer,
    beerType: beerType,
    ABV: ABV,
    pints: pints,
    id: id,
  };
};
