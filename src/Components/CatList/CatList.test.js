import React from "react";
import { render } from "@testing-library/react";
import { CatList } from './CatList';

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

});