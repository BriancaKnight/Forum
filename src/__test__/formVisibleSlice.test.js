import formReducer, { formVisibilitySelector, toggleForm } from "../redux/formVisibleSlice";

describe('formVisibleSlice', () => {
    test('should return default state if no action type is recognized', () => {
      expect(formReducer(false, {type: null})).toEqual(false);
    });

    test('Should toggle form visibility state to true', () => {
      expect(formReducer(false, toggleForm())).toEqual(true);
    });

    

});

