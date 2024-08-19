import {screen} from '@testing-library/react';

export function findElementByTestId<T extends HTMLElement = HTMLElement>(testId: string) {
    // Project specific implementation
    // Most likely the DOM traverse by @test-id attributes
    return screen.getByTestId(testId);
}

export namespace CustomActions {
    export function openBrowser(url: string) {
        // Project specific implementation
    }

    export async function waitFor(time: string): Promise<string> {
        // Project specific implementation
        return "ok"
    }

    export function moveMouseAround(subject: string, param: string) {
    }
}

export namespace TestContext {
    export function beforeStep() {
    }

    export function afterStep() {
    }

    export function checkNoLogsSinceStepStart() {

    }
}

export namespace CustomChecks {
    export function checkClass(subject: string, param: string) {
    }
}