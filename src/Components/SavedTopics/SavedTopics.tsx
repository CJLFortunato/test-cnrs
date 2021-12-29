import React from "react";


export const SavedTopics = (props:any ) => {
   
    return(
        <div className="savedTopics" data-testid="saved-topics">
            <h3>Already selected</h3>
            {props.topics.map((topic: string, index: number)=> (<button key={index} className="saved-btn">{topic}</button>))}
        </div>
    );

}