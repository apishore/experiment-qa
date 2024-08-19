# experiment-qa

Boilerplate for QA automation experiment

Tests are defined in the google docs.

https://drive.google.com/drive/u/0/folders/19s1owOzo9azyuJnRouqQQ7JG5LpGnqzP

For now we are going to use google sheets as a source of test data.

Current implementation rely on locally stored /DSL/TestPlan.xlsx file. It is a copy of the google spreadsheet.

## Spreadsheet structure

### Execution

- Step - description of the test step
- Subject - concatenated testId from DOM (test-id attribute)
- Action - What to do in this test step (click, hover element enter text, etc.)
- Action parameter - text to enter, how to hover element, there to store ID from server, etc.
- Check - How to check subject state (class of element, value of input, etc.)
- Check parameter - value to use in check logic
- Wait - how long to wait before executing check
- Report - what to report in case of failure
- Bug number - bug number to link to in case of failure

### Subjects

On this tab subjects constructed from test ids.
Basically it is formal definition of app / page structure

### Actions

Here is a list of possible actions,
they must be handled by your test functions in CustomActions namespace

### Checks

Here is a list of possible checks,
they must be handled by your test functions in CustomChecks namespace

## How to run

1. Clone the repository

```bash
git clone git@github.com:apishore/experiment-qa.git
```

2. Install dependencies

```bash
npm install
```

3. Run code generator

```bash
npm run generate
```

4. Check generated tests in the ./src/tests folder

## How to collect test ids to build subjects?

It depends on your project structure.

- write simple script to collect test ids from
  your project source code or software requirements.
- Maintain it manually
- Export them from your UI design system

## How to add more tests for my UI?

- Login to any AI system
- Upload sample test plan with well defined subjects, actions and checks
- Ask to create execution flow by proper prompt
- Copy execution flow to the google sheet
- Fix obvious mistakes, add new actions and checks if required
- Add support of new actions and checks into the code generator
- Generate tests and run them
