import { useRef, useState } from "react";

const DiaryItem = ({ id, author, content, created_date, emotion, onRemove, onEdit }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [localContent, setLocalContent] = useState(content);

    const localContentRef = useRef();

    const toggleIsEdit = () => setIsEdit(!isEdit);

    const handleRemove = () => {
        if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
        }
    };

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    };

    const handleEdit = () => {
        if (localContent.length < 5) {
            localContentRef.current.focus();
            return;
        }

        if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
            onEdit(id, localContent);
            setIsEdit(false);
        }
    }

    return(
        <div className="DiaryItem">
            <span>작성자 : {author} | 감정 : {emotion}</span><br/>
            <span className="created-date">작성 시간 : {new Date(created_date).toLocaleString()}</span>
            <p>
                { isEdit ?
                    <>
                        <textarea ref={localContentRef} value={localContent} onChange={(event) => setLocalContent(event.target.value)} />
                    </>
                    :
                    <>{content}</> }
            </p>

            {isEdit ?
                <>
                    <button type="button" onClick={handleQuitEdit}>수정 취소</button>
                    <button type="button" onClick={handleEdit}>수정 완료</button>
                </>
                :
                <>
                    <button type="button" onClick={handleRemove}>삭제하기</button>
                    <button type="button" onClick={toggleIsEdit}>수정하기</button>
                </>}
        </div>
    )
};

export default DiaryItem;