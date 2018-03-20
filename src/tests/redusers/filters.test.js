import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sort by to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  /* expect(state).toEqual({
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  }); */
  expect(state.sortBy).toBe("amount");
});

test("should set sort by to date", () => {
  const currentState = {
    sortBy: "amount"
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: undefined,
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  });
  /* expect(state.sortBy).toBe("date"); */
});

test("should set text filter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "test"
  });
  expect(state).toEqual({
    text: "test",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set startDate filter", () => {
    const state = filtersReducer(undefined, {
        type: "SET_START_DATE",
        startDate: moment(0)
      });
      expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: moment().endOf("month")
      });
});
test("should set endDate filter", () => {
    const endDate = moment().endOf('month').add(3, 'days');
    const state = filtersReducer(undefined, {
        type: "SET_END_DATE",
        endDate
      });
      expect(state.endDate).toEqual(endDate);
});
