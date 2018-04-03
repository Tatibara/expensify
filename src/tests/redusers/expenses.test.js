import expensesReducer from "../../reducers/expenses";
import { expenses } from "../fixtures/expenses";

test("should setup default expenses value", () => {
  const action = {
    type: "@@INIT"
  };

  const state = expensesReducer(undefined, action);

  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const expense = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };

  const state = expensesReducer(undefined, action);

  expect(state).toEqual([expense]);
});

test("should edit an expense", () => {
  const updates = {
    description: "New Description",
    note: "note"
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([
    expenses[0],
    { ...expenses[1], ...updates },
    expenses[2]
  ]);
});

test("should not edit an expense if id not found", () => {
  const updates = {
    description: "New Description",
    note: "note"
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  /* const expensesData = [];

  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = { description, note, amount, createdAt };
  }); */

  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };
  const state = expensesReducer(undefined, action);

  expect(state).toEqual([expenses[1]]);
});
