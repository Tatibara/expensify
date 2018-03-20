import React from "react";
import { EditExpensePage } from "../../components/EditExpensePage";
import { shallow } from "enzyme";
import { expenses } from "../fixtures/expenses";

let history, wrapper, editExpense, removeExpense;

beforeEach(() => {
  history = { push: jest.fn() };
  editExpense = jest.fn();
  removeExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      history={history}
      editExpense={editExpense}
      removeExpense={removeExpense}
    />
  );
});

test("should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handel edit of expense at the EditExpensePage", () => {
  const updates = {
    description: "Test Updates"
  };
  wrapper.find("ExpenseForm").prop("onSubmit")(updates);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, updates);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handel delete of expense at the EditExpensePage", () => {
  wrapper.find("button").prop("onClick")();
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
  expect(history.push).toHaveBeenLastCalledWith("/");
});
