import CodeGulf from './code-golf'

describe('Move table headings to the left', () => {
  it('convert table with same amount of columns', () => {
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

  xit('convert table with differing amount of columns', () => {
    const expected = [
      ["a", 1, "-", "@"],
      ["b", 2, "-", "$"],
      ["c", 3, "-"],
      ["d"]
    ]
    const table = [
      ["a", "b", "c", "d"],
      ["1", "2", "3"],
      ["-", "-", "-"],
      ["@", "$"]
    ]
    expect(CodeGulf.convert(table)).toEqual(expected)
  })

  xit('Throws error when any column that is not the last don\'t have the correct amount of data', () => {
    const table = [
      ["a", "b", "c", "d"],
      ["1", "2", "3"],
      ["-", "-", "-", "-"],
      ["@", "#", "$", "%"]
    ]
    expect(() => CodeGulf.convert(table)).toThrowError(
      'The columns dont have the same amount of data'
    )
  })
})

