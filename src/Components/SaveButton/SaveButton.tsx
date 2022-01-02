import React from "react";

interface Props{
    handleClick: () => void
}

export const SaveButton: React.FC<Props> = (props) => {
    return(
        <div className="save">
            <button className="save-btn" data-testid="save-btn" onClick={props.handleClick}>Save</button>
        </div>
    );
}