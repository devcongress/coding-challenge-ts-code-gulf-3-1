import CodeGulf from './code-golf'

describe('convert table with same amount of columns', () => {
  it('empty string', () => {
    const expected = [
      ["a", 1, "-", "@"],
      ["b", 2, "-", "#"],
      ["c", 3, "-", "$"],
      ["d", 4, "-", "%"]
    ]
    const table = [
      ["a", "b", "c", "d"],
      ["1", "2", "3", "4"],
      ["-", "-", "-", "-"],
      ["@", "#", "$", "%"]
    ]
    expect(CodeGulf.convert(table)).toEqual(expected)
  })

  xit('single characters only are encoded without count', () => {
    const expected = [
      ["a", 1, "-", "@"],
      ["b", 2, "-", "#"],
      ["c", 3, "-", "$"],
      ["d", 4, "-", "%"]
    ]
    const table = [
      ["a", "b", "c", "d"],
      ["1", "2", "3", "4"],
      ["-", "-", "-", "-"],
      ["@", "#", "$", "%"]
    ]
    expect(CodeGulf.convert('XYZ')).toEqual(expected)
  })

  it('Throws error when the columns don\'t have the correct amount of data', () => {
    const table = [
      ["a", "b", "c", "d"],
      ["1", "3"],
      ["-", "-", "-"],
      ["@"]
    ]
    expect(() => CodeGulf.convert(table)).toThrowError(
      'The columns dont have the same amount of data'
    )
  })
})

