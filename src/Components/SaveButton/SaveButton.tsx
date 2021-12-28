export const SaveButton = (props: any) => {
    return(
        <div className="save">
            <button className="save-btn" onClick={props.handleClick}>Save</button>
        </div>
    );
}