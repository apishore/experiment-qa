
    import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import {CustomActions, findElementByTestId, TestContext, CustomChecks} from "src/tests/CustomActions";
      
    describe("SearchForm", () => {
      test("renders SearchForm and interacts correctly", async () => {
        
      // Step 2
    {
      TestContext.beforeStep()
      const subject = findElementByTestId("home");
      expect(subject).toBeInTheDocument();
      CustomActions.openBrowser("home");
      expect(screen.getByTestId("home")).toBeVisible();
      TestContext.afterStep()
    }
		
      // Step 3
    {
      TestContext.beforeStep()
      const subject = findElementByTestId("home#normal");
      expect(subject).toBeInTheDocument();
      await CustomActions.waitFor("");
      expect(screen.getByTestId("home#normal")).toBeVisible();
      TestContext.afterStep()
    }
		
      // Step 4
    {
      TestContext.beforeStep()
      const subject = findElementByTestId("home#normal:cart");
      expect(subject).toBeInTheDocument();
      CustomActions.moveMouseAround("home#normal:cart", "random");
      TestContext.checkNoLogsSinceStepStart();
      TestContext.afterStep()
    }
		
      // Step 5
    {
      TestContext.beforeStep()
      const subject = findElementByTestId("home#normal:cart:spinner");
      expect(subject).toBeInTheDocument();
      
      //TODO: Add check handler for "Check class"
      TestContext.afterStep()
    }
		
      // Step 6
    {
      TestContext.beforeStep()
      const subject = findElementByTestId("");
      expect(subject).toBeInTheDocument();
      //TODO: Add action handler for "Pause"
      
      TestContext.afterStep()
    }
		
      // Step 7
    {
      TestContext.beforeStep()
      const subject = findElementByTestId("home#normal:cart:spinner");
      expect(subject).toBeInTheDocument();
      
      //TODO: Add check handler for "Check class"
      TestContext.afterStep()
    }
		
      // Step 8
    {
      TestContext.beforeStep()
      const subject = findElementByTestId("home#normal:cart:items");
      expect(subject).toBeInTheDocument();
      
      //TODO: Add check handler for "Empty array"
      TestContext.afterStep()
    }
      });
    });
  