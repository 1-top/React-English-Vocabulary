import {Table} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import Word from "./Word";
import useFetch from "../hooks/useFetch";

const Day = () => {
  const {day} = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <div>
      <h2>Day {day}</h2>
      <Table hover>
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
