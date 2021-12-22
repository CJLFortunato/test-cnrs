import React from "react";
import { useState, useEffect } from "react";


export const Form: React.FC = function() {
    const [topics, setTopics] = useState<string[]>([]); //stores the topics that are returned by the API call and is mapped as options in a list.
    const [clickedTopics, setClickedTopics] = useState<string[]>([]); //stores the topics that the user clicks on in the list and is mapped to buttons.
    

    useEffect(() => { //Calls the API on page load to retrieve the list of topics
        const apiCall = async () => {
            const res = await fetch('http://localhost:5000/topics');
            const data = await res.json();
            setTopics(data);
        };
        apiCall();
    }, []);

//================================================================== Event handlers =========================================================================================

    const handleClick = (e: any): void => { // When the user clicks on an item in the list, this grabs the item and puts it into the clickedTopics array. Takes the emitted event as parameter.
        const topic: string = e.target.innerHTML; 
        if (clickedTopics.includes(topic)) {    // If the item has already been clicked on, the function returns without doing anything.
            return;
        }
        setClickedTopics([...clickedTopics, topic]);
    };

    const handleTopicButtonsDelete = (e:any): void => { // When the user clicks on an item in the clicked item array, this deletes the item from the array. Takes the emitted event as parameter.
        const topicToDelete: string = e.target.innerHTML;
        setClickedTopics(clickedTopics.filter((topic)=> topic !== topicToDelete ));
        
    }
//=================================================================== JSX ==================================================================================================

    return(
        <div className="form-ctn">
            <form>
                <label htmlFor="list">Select your expertise(s)</label>
                <select multiple name="list" id="list">
                    {topics.map((topic, index) => {return (<option value={topic} key={index} onClick={handleClick}>{topic}</option>)})}
                </select>
            </form>
            <div className="clicked-topics-ctn">
                <p>{clickedTopics.map((topic, index)=> (<button key={index} onClick={handleTopicButtonsDelete} className="topic-btn">{topic}</button>))}</p>
            </div>
        </div>
    );

};