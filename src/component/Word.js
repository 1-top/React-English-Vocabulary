import React, {useState} from 'react';
import {Button} from "react-bootstrap";

const Word = ({word}) => {
  const [isShow, setIsShow] = useState(false);
  const toogleShow = () => {
    setIsShow(!isShow);
  }
  return (
      <tr key={word.id}>
        <td><input type="checkbox" checked={word.isDone} /></td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <Button onClick={toogleShow}>뜻 {isShow ? '숨기기' : '보기'}</Button>
          <Button variant='danger'>삭제</Button>
        </td>
      </tr>
  );
};

export default Word;
