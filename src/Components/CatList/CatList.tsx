import React from "react";



export const CatList = function(props: any) {
    
    return(
        <div className="form-ctn">
            <h2>Topics</h2>
            <form>
                <label htmlFor="list">Select your expertise(s)</label>
                <select multiple name="list" id="list">
                    {props.topics.map((topic: string, index: number) => {return (<option value={topic} key={index} onClick={props.handleClick}>{topic}</option>)})}
                </select>
            </form>
            <div className="clicked-topics-ctn">
                {props.clickedTopics.map((topic: string, index: number)=> (<button key={index} onClick={props.handleDelete} className="topic-btn btn">{topic}</button>))}
            </div>
        </div>
    );

};