import React, {useState} from 'react';
import {Button} from "react-bootstrap";

const Word = ({word: w}) => {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setDone] = useState(word.isDone);
  const toggleShow = () => setIsShow(!isShow);
  const toggleDone = () => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...word,
        "isDone": !isDone,
      }),
    })
      .then(response => {
        if (response.ok) setDone(!isDone)
      });
  };

  const deleteWord = () => {
    if (window.confirm('단어를 삭제하시겠습니까.')) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE"
      }).then(response => {
        if (response.ok) setWord({id: 0})
      })
    }
  }

  if (word.id === 0) return null;

  return (
    <tr key={word.id}>
      <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <Button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</Button>
        <Button variant='danger' onClick={deleteWord}>삭제</Button>
      </td>
    </tr>
  );
};

export default Word;
