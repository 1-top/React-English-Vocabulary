import dummy from '../DB/data.json';
import {Table} from "react-bootstrap";
import {useParams} from 'react-router-dom';

const Day = () => {
  const {day} = useParams();
  const wordList = dummy.words.filter(word => word.day === Number(day));

  return (
    <div>
      <h2>Day {day}</h2>
      <Table>
        <tbody>
        {wordList.map(word => (
          <tr>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Day;
