import React from "react";


export const SavedTopics = (props:any ) => {
   
    return(
        <div>
            {props.topics.map((topic: string, index: number)=> (<button key={index} className="topic-btn">{topic}</button>))}
        </div>
    );

}