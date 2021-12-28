import React from "react";


export const SavedTopics = (props:any ) => {
   
    return(
        <div className="savedTopics">
            <h3>Your topics</h3>
            {props.topics.map((topic: string, index: number)=> (<button key={index} className="saved-btn">{topic}</button>))}
        </div>
    );

}