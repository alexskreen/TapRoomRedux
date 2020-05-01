import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import kegListReducer from "../../reducers/keg-list-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
    });
  });

  test("Check that initial state of formVisibleReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, { type: null })
    );
  });

  test("Check that initial state of kegListReducer matches root reducer", () => {
    const action = {
      type: "ADD_KEG",
      brewery: "Great Notion",
      beer: "Over Ripe",
      beerType: "IPA - NE",
      ABV: "7%",
      pints: 124,
      id: 1,
    };
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(
      kegListReducer(undefined, action)
    );
  });

});