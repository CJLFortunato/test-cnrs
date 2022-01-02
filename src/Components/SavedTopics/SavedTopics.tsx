import React from "react";


interface Props {
    topics: string[];
}

export const SavedTopics: React.FC<Props> = (props ) => {

    const jsx = () => {
        if (props.topics.length > 0) {
           return props.topics.map((topic: string, index: number)=> (<button key={index} data-testid="saved-btn" className="saved-btn">{topic}</button>)) 
        } else {
            return(<p className="error-text">There has been an error retrieving the data. Please try again.</p>);
        }
    }
   
    return(
        <div className="savedTopics" data-testid="saved-topics">
            <h3>Already selected</h3>
            {jsx()}
        </div>
    );

}