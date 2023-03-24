export const GoBack = (props) => {
    return (
        <>
            <div className='go-back'>
                <i
                    onClick={props.goBack}
                    className='material-icons'
                >
                    {" "}
                    keyboard_arrow_left{" "}
                </i>
                <span
                    onClick={props.goBack}
                    className='go-back-text'
                >
                    {" "}
                    GO BACK
                </span>
                <span className='go-back-page'> {props.name}</span>
            </div>
        </>
    );
};
