import { render } from '@testing-library/react';
import { SavedTopics } from './SavedTopics';
import React from "react";

describe("Saved topics buttons component", () => {

    const mockProps = [
        "art","litt"
      ];

    it("renders on the page", () => {
        const { getByTestId} = render(<SavedTopics topics={mockProps}/>);
        const savedTopics = getByTestId("saved-topics");

        expect(savedTopics).toBeTruthy();
    });

});

