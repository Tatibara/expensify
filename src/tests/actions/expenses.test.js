import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123", {
    amount: 4500,
    description: "description"
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: { amount: 4500, description: "description" }
  });
});

test("should setup edit expense action object with provided values", () => {
  const expenseDate = {
    description: "Car Bill",
    amount: 1000,
    createdAt: 222435454
  };
  const action = addExpense(expenseDate);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseDate,
      note: ""
    }
  });
});

test("should setup edit expense action object witho default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
