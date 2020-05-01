import kegListReducer from "../../reducers/keg-list-reducer";

describe("kegListReducer", () => {
  let action;
  const kegData = {
    brewery: "Great Notion",
    beer: "Over Ripe",
    beerType: "IPA - NE",
    ABV: "7%",
    pints: 124,
    id: 1,
  };

    const currentState = {
      1: {brewery: "Great Notion",
      beer: "Over Ripe",
      beerType: "IPA - NE",
      ABV: "7%",
      pints: 124,
      id: 1 },
      2: {brewery: "Monkish",
      beer: "Planets Gotta Roll",
      beerType: "DIPA - NE",
      ABV: "8.4%",
      pints: 124,
      id: 2 }
    };

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

    test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {brewery: "Monkish",
        beer: "Planets Gotta Roll",
        beerType: "DIPA - NE",
        ABV: "8.4%",
        pints: 124,
        id: 2 }
    });
  });


  test("Should successfully edit keg in masterKegList", () => {
    const { brewery, beer, beerType, ABV, pints, id } = kegData;
    action = {
      type: "EDIT_KEG",
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

  test("Should successfully reduce pints by 1", () => {
    const { brewery, beer, beerType, ABV, pints, id } = kegData;
    action = {
      type: "DRINK_PINT",
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
        pints: pints -1,
        id: id,
      },
    });
  });
  
});