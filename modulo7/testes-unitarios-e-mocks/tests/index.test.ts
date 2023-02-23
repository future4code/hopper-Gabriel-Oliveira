import { validateCharacter } from "../src";

//a)
test("Should return false for empty name", () => {
  const result = validateCharacter({
    name: "",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

//b)
test("Should return false for life 0", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

//c)
test("Should return false for strenght 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 400,
      strength: 0,
      defense: 300,
    });
  
    expect(result).toBe(false);
  });

//d)
test("Should return false for defense 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 400,
      strength: 500,
      defense: 0,
    });
  
    expect(result).toBe(false);
  });

//e)
test("Should return false for value negative", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 400,
      strength: 500,
      defense: -100,
    });
  
    expect(result).toBe(false);
  });

//f)
test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });
