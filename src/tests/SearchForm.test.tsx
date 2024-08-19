//GENERATED FILE - DO NOT EDIT!
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {CustomActions, findElementByTestId, TestContext, CustomChecks} from "src/tests/CustomActions";
  
describe("SearchForm", () => {
  test("renders SearchForm and interacts correctly", async () => {
    
      // Step 1 - Initialization
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("home");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        CustomActions.openBrowser("home");
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(30);
        // perform check if defined
        expect(screen.getByTestId("home")).toBeVisible();
        TestContext.afterStep()
      }
		
      // Step 2 - 
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("home#normal");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        await CustomActions.waitFor("");
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(30);
        // perform check if defined
        expect(screen.getByTestId("home#normal")).toBeVisible();
        TestContext.afterStep()
      }
		
      // Step 3 - 
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("home#normal:cart");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        CustomActions.moveMouseAround("home#normal:cart", "random");
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(30);
        // perform check if defined
        TestContext.checkNoLogsSinceStepStart();
        TestContext.afterStep()
      }
		
      // Step 4 - 
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("home#normal:cart:spinner");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(30);
        // perform check if defined
        //TODO: Add check handler for "Check class"
        TestContext.afterStep()
      }
		
      // Step 5 - 
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        //TODO: Add action handler for "Pause"
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(30);
        // perform check if defined
        
        TestContext.afterStep()
      }
		
      // Step 6 - 
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("home#normal:cart:spinner");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(30);
        // perform check if defined
        //TODO: Add check handler for "Check class"
        TestContext.afterStep()
      }
		
      // Step 7 - Check empty cart
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("home#normal:cart:items");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(30);
        // perform check if defined
        //TODO: Add check handler for "Empty array"
        TestContext.afterStep()
      }
		
      // Step 8 - Add previously bought
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("home#normal:cart:repeatPrevious");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        //TODO: Add action handler for "Click"
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(30);
        // perform check if defined
        
        TestContext.afterStep()
      }
		
      // Step 9 - 
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("home#normal:cart:spinner");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(300);
        // perform check if defined
        //TODO: Add check handler for "Check class"
        TestContext.afterStep()
      }
		
      // Step 10 - Check empty cart
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("home#normal:cart:items");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(30);
        // perform check if defined
        //TODO: Add check handler for "Array size"
        TestContext.afterStep()
      }
		
      // Step 11 - 
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("home#normal:cart:items$first");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        //TODO: Add action handler for "Mark id as"
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(30);
        // perform check if defined
        
        TestContext.afterStep()
      }
		
      // Step 12 - Open chat item details
      {
        TestContext.beforeStep()
        // find subject
        const subject = findElementByTestId("details#{id}");
        expect(subject).toBeInTheDocument();
        // perform action if defined
        CustomActions.openBrowser("details#{id}");
        // always wait before check even if check is not defined. It resolves side effect of future test modifications.
        await CustomChecks.waitBeforeCheck(300);
        // perform check if defined
        
        TestContext.afterStep()
      }
  });
});
