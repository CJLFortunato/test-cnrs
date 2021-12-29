import React from "react";
import { render } from "@testing-library/react";
import { CatList } from '../Components/CatList/CatList';
import { SavedTopics } from '../Components/SavedTopics/SavedTopics';

describe("The filtering functionality", () => {

    const mockTopics = [
        "anthro-bio","anthro-se","archeo","archi","art","class","demo","droit","eco","edu","envir","genre","geo","manag","hisphilso","hist","info","lang","litt","museo","musiq",
        "phil","psy","relig","scipo","socio","stat"
      ];

      const mockSavedTopics = [
        "art","litt"
      ];

    it("receives an array where the topics already saved have been filtered out", () => {

        const getTopicsList = function () {
            const { getAllByTestId } = render(<CatList topics={mockTopics}/>);
            const topicButtons = getAllByTestId("topic-btn");

            return topicButtons;
        };

        const getSavedTopicsList = function () {
            const { getAllByTestId } = render(<SavedTopics topics={mockSavedTopics}/>);
            const savedButtons = getAllByTestId("saved-btn");

            return savedButtons;
        };

        expect(getTopicsList()).toEqual(expect.not.arrayContaining(getSavedTopicsList()));
    });
});


