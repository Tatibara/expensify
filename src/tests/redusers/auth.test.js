import authReducer from "../../reducers/auth";

test("should setup default auth value", () => {
  const action = {
    type: "@@INIT"
  };

  const state = authReducer(undefined, action);

  expect(state).toEqual({});
});

test("should set uid for login", () => {
  const uid = "dkjflskfjkldjfkjv";
  const action = {
    type: "LOGIN",
    uid
  };

  const state = authReducer(undefined, action);

  expect(state).toEqual({ uid });
});

test("should clear uid for logout", () => {
  const action = { type: "LOGOUT" };

  const state = authReducer(undefined, action);
  expect(state).toEqual({});
});
