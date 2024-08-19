# experiment-qa

Boilerplate for QA automation experiment

Tests are defined in the google docs.

https://drive.google.com/drive/u/0/folders/19s1owOzo9azyuJnRouqQQ7JG5LpGnqzP

For now we are going to use google sheets as a source of test data.

Current implementation rely on locally stored /DSL/TestPlan.xlsx file. It is a copy of the google sheet.

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

Here is a list of possible actions, they must be handled by functions in code

### Checks

Here is a list of possible checks, they must be handled by functions in code

#HOW TO RUN

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Run code generator

```bash
npm run generate
```

4. Check tests at stc/tests folder

## How to collect test ids to build subjects?
In depends on your project structure, write simple script to collect test ids from 
your project source code or software requirements.

## How to add more tests for my UI?
1. Login to any AI system
2. Pass your source code and software requirements
3. Give a sample of test plan
4. Ask to generate test plan for certain cases
5. Copy generated test plan to the google sheet
7. Fix obvious mistakes
8. Generate tests agains
