const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hallo ${name}`;

test("should add two numbers", () => {
  const result = add(3, 4);

  // create an assortion
  /* if (result !== 7) {
    throw new Error(`You added 4 and 3. The result was ${result}, Expect: 7`);
  } */

  expect(result).toBe(7);
});

test("should print hello with a name", () => {
  const result = generateGreeting("Taty");
  expect(result).toBe("Hallo Taty");
});

test("should print Anonymous name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hallo Anonymous");
});
