import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';

interface TestStep {
    subject: string;
    action: string;
    actionParam: string;
    check: string;
    checkParam: string;
}

// Load the spreadsheet
const workbook = xlsx.readFile('./DSL/TestPlan1.xlsx');
const executionSheet = xlsx.utils.sheet_to_json<TestStep>(workbook.Sheets['Execution']);

// Actions Map
const actionsMap: { [key: string]: (subject: string, param: string) => string } = {
    click: (subject) => `userEvent.click(screen.getByTestId("${subject}"));`,
    type: (subject, param) => `userEvent.type(screen.getByTestId("${subject}"), "${param}");`,
    hover: (subject) => `userEvent.hover(screen.getByTestId("${subject}"));`,
    // Add other actions as needed
};

const defaultAction = (action: string) => (subject: string, param: string) => {
    `//TODO: Add action handler for "${action}"`
}

const defaultCheck = (check: string) => (subject: string, param: string) => {
    `//TODO: Add check handler for "${check}"`
}

// Checks Map
const checksMap: { [key: string]: (subject: string, param: string) => string } = {
    visible: (subject) => `expect(screen.getByTestId("${subject}")).toBeVisible();`,
    hasValue: (subject, param) => `expect(screen.getByTestId("${subject}")).toHaveValue("${param}");`,
    hasClass: (subject, param) => `expect(screen.getByTestId("${subject}")).toHaveClass("${param}");`,
    // Add other checks as needed
};

// Generate test scenarios
const generateTestScenarios = (executionData: TestStep[]) => {
    return executionData.map((step, index) => {
        const actionCode = (actionsMap[step.action] || defaultAction(step.action)) (step.subject, step.actionParam);
        const checkCode = (checksMap[step.check] || defaultCheck)(step.subject, step.checkParam);

        return `
      // Step ${index + 1}
      ${actionCode}
      ${checkCode}
    `;
    }).join('\n');
};

// Generate the final test file content
const generateTestFileContent = (testName: string, executionData: TestStep[]) => {
    const stepsCode = generateTestScenarios(executionData);
    return `
    import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';

    describe("${testName}", () => {
      test("renders ${testName} and interacts correctly", () => {
        render(<${testName} />);
        ${stepsCode}
      });
    });
  `;
};

// Write test file
const testName = 'SearchForm';  // Customize this as needed
const testContent = generateTestFileContent(testName, executionSheet);

fs.writeFileSync(path.join(__dirname, `/tests/${testName}.test.tsx`), testContent);

console.log(`${testName}.test.tsx generated successfully!`);
