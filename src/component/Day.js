import dummy from '../DB/data.json';
import {Button, Table} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import Word from "./Word";

const Day = () => {
  const {day} = useParams();
  const wordList = dummy.words.filter(word => word.day === Number(day));

  return (
    <div>
      <h2>Day {day}</h2>
      <Table hover>
        <tbody>
        {wordList.map(word => (
          <Word word={word} key={word.id} />
        ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Day;
