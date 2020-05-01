import kegListReducer from "../../reducers/keg-list-reducer";

describe("kegListReducer", () => {

  let action;
  const kegData = {
    brewery: "Great Notion",
    beer: "Over Ripe",
    beerType: "IPA - NE",
    ABV: "7%",
    pints: 124,
    id: 1
  }

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new keg data to masterKegList", () => {
    const { brewery, beer, beerType, ABV, pints, id } = kegData;
    action = {
      type: "ADD_KEG",
      brewery: brewery,
      beer: beer,
      beerType: beerType,
      ABV: ABV,
      pints: pints,
      id: id,
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        brewery: brewery,
        beer: beer,
        beerType: beerType,
        ABV: ABV,
        pints: pints,
        id: id,
      },
    });
  });



});
