import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';

function App() {
  // let [변수명, 변경함수] = useState(초기값);
  // useXXX : 리액트 내장함수 ( 리액트 훅 )
  const [title, setTitle] = useState('게시판');
  const [boardTitle, setBoardTitle] = useState(['React', 'HTML', 'CSS']);
  const [like, setLike] = useState(0);
  const [show, setShow] = useState(false);

  function change() {
    setLike(like+1); // 기존 like에서 1이 증가해야 하기 때문
  }
  
  return (
    <div className='App'>
      <div className='nav'>
        <h3>{title}</h3>
      </div>
      <button onClick={() => {
        setTitle('상품목록'); 
      }}>제목 바꾸기</button> 

      <div className="list">
        <h4>{boardTitle[0]} <button onClick={change}>좋아요</button> {like} </h4>
        <p>2025-07-16</p>
      </div>
      <div className="list">
        <h4>{boardTitle[1]}</h4>
        <p>2025-07-16</p>
      </div>
      <div className="list">
        <h4 onClick={() => {
          setShow(show? <Detail/> : '');
        }}>{boardTitle[2]}</h4>
        <p>2025-07-16</p>
      </div>

      <button onClick={() => {
        // setBoardTitle(['JAVA', 'HTML', 'CSS'])
        let _boardTitle = [...boardTitle]; // 새 배열이 만들어지므로 주소가 달라진다.
        _boardTitle[0] = 'JAVA';
        setBoardTitle(_boardTitle);
      }}>첫번째 게시물 제목바꾸기</button>

      {/* 다른 컴포넌트를 불러옴. import 해야 하니까 자동완성하는 걸 추천 */}
      {show? <Detail/> : ''}
      

    </div>
  )
}

export default App
