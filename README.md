# experiment-qa

I need a code generator script to parse such files and build UI test scenarios.

1. script must be built in typescript
2. script must produce test using  '@testing-library/react'

3. Sample code to be generated
4. 
```
import {render, screen} from '@testing-library/react'
describe("SearchForm", () => {
   test("renders SearchForm", () => {
    render(<SearchForm/>);
    expect(screen.getByRole("heading", { name: /location search/i })
        ).toBeVisible();
        
    expect(screen.getByRole("textbox", { name: /choose an origin \(optional\)/i })
        ).toBeVisible();

    expect(screen.getByRole("textbox", { name: /choose a destination/i})
        ).toBeVisible();
        
    expect(screen.getByRole("button", { name: /search/i })
        ).toBeVisible();
  });
});
```

About spreadsheet structure
4. Execution is the test logic. Each row has 
4.1. Subject - concatenated testId from DOM (test-id attribute)
4.2 Action - What to do in test step (click, hover element enter text, etc.)
4.3 Action parameter - text to enter, how to hover element, etc.
4.4 Check - what to check after action (class of element, value of input, etc.)
4.5 Check parameter - value to use in check

Subjects
On this tab subjects constructed from test ids. Basically it is formal definition of page structure

Actions
Here is a list of possible actions, they must be handled by functions in code

Checks
Here is a list of possible checks, they must be handled by functions in code
