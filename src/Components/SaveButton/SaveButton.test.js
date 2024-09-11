/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from '@testing-library/react';
import { SaveButton } from './SaveButton';
import React from "react";
import { act } from "react-dom/test-utils";


describe("Save Button", () => {

    it("renders on the page", () => {
        const { getByText } = render(<SaveButton/>);
        const saveButton = getByText("Save");

        expect(saveButton).toBeTruthy();
    });

    it("calls its onClick event handler", () => {
        act(() => {
            const mockClickHandler = jest.fn();
            const { getByTestId } = render(<SaveButton handleClick={mockClickHandler}/>);
            const saveButton = getByTestId("save-btn");

            fireEvent.click(saveButton);

            expect(mockClickHandler).toHaveBeenCalled();
        });
    });

});