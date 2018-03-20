import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();

  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt date correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "new text";
  wrapper.find("input").simulate("change", { target: { value } });
  //wrapper.find("input").prop("onChange")({ target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find("select").prop("onChange")({ target: { value } });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").prop("onChange")({ target: { value } });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const value = {
    startDate: moment(0),
    endDate: moment(0).add(3, "months")
  };

  wrapper.find("DateRangePicker").prop("onDatesChange")(value);

  expect(setStartDate).toHaveBeenLastCalledWith(value.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(value.endDate);
});

test("should handle date focus changes", () => {
  const value = 'endDate';
  wrapper.find("DateRangePicker").prop("onFocusChange")(value);
  expect(wrapper.state("calenderFocused")).toBe(value);
});
