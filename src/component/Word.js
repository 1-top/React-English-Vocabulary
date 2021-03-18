import React, {useState} from 'react';
import {Button} from "react-bootstrap";

const Word = ({word}) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setDone] = useState(word.isDone);
  const toggleShow = () => setIsShow(!isShow);
  const toggleDone = () => setDone(!isDone);

  return (
    <tr key={word.id}>
      <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <Button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</Button>
        <Button variant='danger'>삭제</Button>
      </td>
    </tr>
  );
};

export default Word;
