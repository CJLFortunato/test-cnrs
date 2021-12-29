import App from "./App";
import React from "react";
import { render } from "@testing-library/react";


describe("the root App component", () => {

    it("renders on the page", () => {
        const { getByTestId } = render(<App/>);
        const app = getByTestId("app");

        expect(app).toBeTruthy();
    });
    

});