export const CatList = function(props: any) {
    
    return(
        <div className="cat-list">
            <h2>Topics</h2>
            <div className="form-ctn">
                    <h3>Select your expertise(s)</h3>
                    <div className="list">
                    {props.topics.map((topic: string, index: number) => {return (<button className="inactive" key={index} onClick={props.handleClick}>{topic}</button>)})}
                    </div>
            </div>
            
        </div>
    );

};