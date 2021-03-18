import {Table} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import Word from "./Word";
import useFetch from "../hooks/useFetch";
import React from "react";

const Day = () => {
  const {day} = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  if (words.length === 0) return <span>Loading...</span>

  return (
    <div>
      <h2>Day {day}</h2>
      <Table hover bordered>
        <thead>
          <tr>
            <th>암기</th>
            <th>단어</th>
            <th>뜻</th>
            <th>옵션</th>
          </tr>
        </thead>
        <tbody>
        {words.map(word => (
          <Word word={word} key={word.id} />
        ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Day;
