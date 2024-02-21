import { useRef, useState } from 'react';

import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';

function App() {
  const [diaryList, setDiaryList] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;
    setDiaryList([newItem, ...diaryList]);
  }

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = diaryList.filter((diary) => diary.id !== targetId);
    setDiaryList(newDiaryList);
  }

  const onEdit = (targetId, newContent) => {
    setDiaryList(diaryList.map((diary) =>  diary.id === targetId ? { ...diary, content: newContent } : diary ));
    // ---- MY CODE ----
    // const newDiaryList = diaryList.map((diary) => {
    //   diary.id === targetId ? diary.content = newContent : ''
    //   return diary;
    // })

    // setDiaryList(newDiaryList);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={diaryList} onRemove={onRemove} onEdit={onEdit} />
      <Lifecycle />
    </div>
  );
}

export default App;
