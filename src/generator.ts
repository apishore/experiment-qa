import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';

interface TestStep {
    description: string;
    subject: string;
    action: string;
    actionParam: string;
    check: string;
    checkParam: string;
    report: string;
    issueNumber: string;
    waitBeforeCheck: number;
}

// Load the spreadsheet
const workbook = xlsx.readFile('./DSL/TestPlan1.xlsx');
const executionSheet = xlsx.utils.sheet_to_json<any>(workbook.Sheets['Execution']).map(src => {
    return {
        description: src['__EMPTY'] || "",
        subject: src['__EMPTY_1'] || "",
        action: src['__EMPTY_2'] || "",
        actionParam: src['__EMPTY_3'] || "",
        check: src['__EMPTY_4'] || "",
        checkParam: src['__EMPTY_5'] || "",
        waitBeforeCheck: parseInt(src['__EMPTY_6'] || "30"),
        report: src['__EMPTY_7'] || "",
        issueNumber: src['__EMPTY_8'] || "",
    } as TestStep;
});

// Actions Map
const actionsMap: { [key: string]: (subject: string, param: string) => string } = {
    "Open": (subject) => `CustomActions.openBrowser("${subject}");`,
    "Wait for redirect": (subject, param) => `await CustomActions.waitFor("${param}");`,
    "hover": (subject) => `userEvent.hover(screen.getByTestId("${subject}"));`,
    "Mouse around (random)": (subject) => `CustomActions.moveMouseAround("${subject}", "random");`,
    // Add other actions as needed
};

const defaultAction = (action: string) => (subject: string, param: string) => {
    return `//TODO: Add action handler for "${action}"`
}

const defaultCheck = (check: string) => (subject: string, param: string) => {
    return `//TODO: Add check handler for "${check}"`
}

// Checks Map
const checksMap: { [key: string]: (subject: string, param: string) => string } = {
    "Visible": (subject) => `expect(screen.getByTestId("${subject}")).toBeVisible();`,
    hasValue: (subject, param) => `expect(screen.getByTestId("${subject}")).toHaveValue("${param}");`,
    hasClass: (subject, param) => `expect(screen.getByTestId("${subject}")).toHaveClass("${param}");`,
    "Clean browser logs": (subject, param) => `TestContext.checkNoLogsSinceStepStart();`,
    // Add other checks as needed
};

// Generate test scenarios
const generateTestScenarios = (executionData: TestStep[]) => {

    const res = []
    for (let index = 1; index < executionData.length; index++) {
        const step = executionData[index];
        console.log(step);

        const actionCode = step.action === "" ? "" : (actionsMap[step.action] || defaultAction(step.action))(step.subject, step.actionParam);
        const checkCode = step.check === "" ? "" : (checksMap[step.check] || defaultCheck(step.check))(step.subject, step.checkParam);

        if (actionCode !== "" || checkCode !== "") {
            res.push(`
      // Step ${index} - ${step.description}
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("${step.subject}");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        ${actionCode}
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(${step.waitBeforeCheck});
        // perform check if defined
        ${checkCode}
        TestContext.afterStep()
      }`);
        }
    }
    return res.join('\n\t\t');
}

// Generate the final test file content
const generateTestFileContent = (testName: string, executionData: TestStep[]) => {
    const stepsCode = generateTestScenarios(executionData);
    return `//GENERATED FILE - DO NOT EDIT!
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {CustomActions, findElementByTestId, TestContext, CustomChecks} from "src/tests/CustomActions";
  
describe("${testName}", () => {
  test("renders ${testName} and interacts correctly", async () => {
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
