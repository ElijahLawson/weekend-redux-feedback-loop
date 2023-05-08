import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Success() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newFeedback = () => {
        dispatch({
            type: 'RESET_STATE',
            payload: ''
        })

        navigate('/')
    }

    return(
        <>
        <div>
            <h1>Feedback!!</h1>
        </div>
        <div>
            <h1>Thank You!</h1>
            <button onClick={newFeedback}>Leave New Feedback</button>
        </div>
        </>
    )
}

export default Success;