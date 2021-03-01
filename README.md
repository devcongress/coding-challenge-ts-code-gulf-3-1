# DevCongress coding exercise

Write a program that will move the heading of a table to the left side so that given the table:

|a|b|c|d|
|-|-|-|-|
|[]|A|O|X|

it returns

|a|[]|
|-|-|
|b|A|
|c|O|
|d|X|

Bonus points for proper design and use of data structures. By data structures I don't mean the stuff you find in books but merely classes, etc that make the code easy to read and understand.

## Setup

## Requirements

Install assignment dependencies:

```bash
$ yarn install
```

## Making the test suite pass

Execute the tests with:

```bash
$ yarn test
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xit` to
`it`.
