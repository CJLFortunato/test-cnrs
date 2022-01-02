import React from "react";

interface Props {
     topics: string[]; handleClick: (e: any) => void; handleDelete: (e: any, topic: string) => void; clickedTopics: string[]; 
}

export const CatList: React.FC<Props> = function(props) {

    const jsx = () => {
        if (props.topics.length > 0) {
           return props.topics.map((topic: string, index: number) => {return (<button className="inactive" data-testid="topic-btn" key={index} onClick={props.handleClick}>{topic}</button>)});
        } else {
            return(<p className="error-text">There has been an error retrieving the data. Please try again.</p>);
        }
    }
    
    return(
        <div className="cat-list">
            <h2>Topics</h2>
            <div className="form-ctn">
                    <h3>Select your expertise(s)</h3>
                    <div className="list" data-testid="topic-list">
                    {jsx()}
                    </div>
            </div>
        </div>
    );
};