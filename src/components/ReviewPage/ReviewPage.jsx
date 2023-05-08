import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ReviewPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentFeedback = useSelector(storeInstance => storeInstance.currentFeedback);

    const submitFeedback = () => {
        dispatch({
            type: 'ADD_FEEDBACK',
            payload: currentFeedback
        })

        navigate('../Success');
    }

    return(
        <>
            <h1>Review your Feedback</h1>
            <p>Feelings: {currentFeedback.feelings}</p>
            <p>Understanding: {currentFeedback.understanding}</p>
            <p>Support: {currentFeedback.support}</p>
            <p>Comments: {currentFeedback.comments}</p>
            <button onClick={submitFeedback}>SUBMIT</button>
        </>
    )
}

export default ReviewPage;