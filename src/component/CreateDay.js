import React, {useRef, useState} from 'react';
import useFetch from "../hooks/useFetch";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router";

const CreateDay = () => {
  const days = useFetch('http://localhost:3001/days');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const createDay = () => {
    if (!isLoading) {
      setIsLoading(true);
      fetch('http://localhost:3001/days', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({
          day: days.length + 1,
        }),
      }).then(response => {
        if (response.ok) {
          alert('Day가 추가되었습니다.');
          history.push('/');
        }
      });
    }
  }

  return (
    <div>
      <h3>현재 일수: {days.length}</h3>
      <Button onClick={createDay}>{isLoading ? 'Saving...' : 'Add Day'}</Button>
    </div>
  );
};

export default CreateDay;
