let makeGuess = require("./closure")

function expectDefaultValues(result) {
  expect(result.totalGuesses).toBe(0)
  expect(result.completed).toBe(false)
  expect(result.correctCharacters).toEqual([])
  expect(result.incorrectCharacters).toEqual([])
}

describe("guess(word)", () => {
  
  let guess
  beforeEach(() => {
    guess = makeGuess("hello")
  })

  test("if a word is not 5 characters, nothing should happen", () => {
    let result = guess("a")
    expectDefaultValues(result)
    result = guess("abcdefgh")
    expectDefaultValues(result)
  })

  test("if a word is not 5 characters, nothing should happen 2", () => {
    let result = guess("happy")
    expect(result.totalGuesses).toBe(1)
    result = guess("a")
    expect(result.totalGuesses).toBe(1)
    result = guess("abcdefgh")
    expect(result.totalGuesses).toBe(1)
  })

  test("increments total guesses", () => {
    let result = guess("happy")
    expect(result.totalGuesses).toBe(1)
    result = guess("mount")
    expect(result.totalGuesses).toBe(2)
  })

  test("stores correctly guessed letters in correct array", () => {
    let result = guess("happy")
    expect(result.correctCharacters).toEqual(expect.arrayContaining("h".split("")))
    result = guess("mount")
    expect(result.correctCharacters).toEqual(expect.arrayContaining("ho".split("")))
    expect(result.completed).toBe(false)
  })

  test("stores correctly guessed letters without duplicates", () => {
    let result = guess("happy")
    expect(result.correctCharacters).toEqual(expect.arrayContaining("h".split("")))
    result = guess("hippy")
    expect(result.correctCharacters).toEqual(expect.arrayContaining("h".split("")))
    expect(result.completed).toBe(false)
  })

  test("stores incorrectly guessed letters in incorrect array", () => {
    let result = guess("happy")
    expect(result.incorrectCharacters).toEqual(expect.arrayContaining("appy".split("")))
    result = guess("mount")
    expect(result.incorrectCharacters).toEqual(expect.arrayContaining("mtappyun".split("")))
    expect(result.completed).toBe(false)
  })

  test("stores incorrectly guessed letters without duplicates", () => {
    let result = guess("happy")
    expect(result.incorrectCharacters).toEqual(expect.arrayContaining("appy".split("")))
    result = guess("hippy")
    expect(result.incorrectCharacters).toEqual(expect.arrayContaining("appy".split("")))
    expect(result.completed).toBe(false)
  })

  test("sets completed to true when correct word is guessed", () => {
    let result = guess("hello")
    expect(new Set(result.correctCharacters)).toEqual(new Set("helo".split("")))
    expect(result.completed).toBe(true)
  })
})
