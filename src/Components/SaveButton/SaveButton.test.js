import { render } from '@testing-library/react';
import { SaveButton } from './SaveButton';
import React from "react";


describe("Save Button", () => {

    it("renders on the page", () => {
        const { getByText } = render(<SaveButton/>);
        const saveButton = getByText("Save");

        expect(saveButton).toBeTruthy();
    });

});