import { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: "1"
    })

    const handleChangeState = (event) => {
        // ---- THIS IS VIDEO CODE ----
        setState({
            ...state,
            [event.target.name]: event.target.value
        })

        // ---- THIS IS MY CODE ----
        // switch (name) {
        //     case 'author':
        //         setState({
        //             ...state,
        //             author: event.target.value
        //         })
        //         break;
            
        //     case 'content':
        //         setState({
        //             ...state,
        //             content: event.target.value
        //         })
        //         break;

        //     default:
        //         break;
        // }
    }

    const handleSubmit = () => {
        console.log(state);

        if (state.author.length < 1) {
            authorInput.current.focus();
            return;
        }

        if (state.content.length < 5) {
            contentInput.current.focus();
            return;
        }

        // CREATE NEW DIARY
        onCreate(state.author, state.content, state.emotion);
        // ALERT
        alert('성공적으로 저장했습니다.')
        // INITIALIZE
        setState({
            author: "",
            content: "",
            emotion: "1"
        })
        
    }

    return(
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input
                    ref={authorInput}
                    name="author"
                    placeholder="작성자"
                    value={state.author}
                    onChange={(event) => handleChangeState(event)}
                />
            </div>
            <div>
                <textarea
                    ref={contentInput}
                    name="content"
                    placeholder="내용"
                    value={state.content}
                    onChange={(event) => handleChangeState(event)}
                />
            </div>
            <div>
                <span>오늘의 감정점수 : </span>
                <select name="emotion" value={state.emotion} onChange={(event) => handleChangeState(event)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    )
}

export default DiaryEditor;