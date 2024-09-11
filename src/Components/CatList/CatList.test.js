/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { CatList } from './CatList';
import { act } from "react-dom/test-utils";


describe("the topic list component", () => {

    const mockProps = [
        "anthro-bio","anthro-se","archeo","archi","art","class","demo","droit","eco","edu","envir","genre","geo","manag","hisphilso","hist","info","lang","litt","museo","musiq",
        "phil","psy","relig","scipo","socio","stat"
      ];

    it("renders the list on the page", () => {
        const { getByTestId } = render(<CatList topics={mockProps}/>);
        const catList = getByTestId("topic-list");

        expect(catList).toBeTruthy();
    });

    it("renders all the topics returned as buttons", () => {
        const { getAllByTestId } = render(<CatList topics={mockProps}/>)
        const topicButtons = getAllByTestId("topic-btn");

        expect(topicButtons).toHaveLength(mockProps.length);
    });

    it("calls its onClick event handler", () => {
        act(() => {
            const mockClickHandler = jest.fn();
            const { getAllByTestId } = render(<CatList topics={mockProps} handleClick={mockClickHandler}/>)
            const topicButtons = getAllByTestId("topic-btn");

            fireEvent.click(topicButtons[0]);

            expect(mockClickHandler).toHaveBeenCalled();
        })
    });
});