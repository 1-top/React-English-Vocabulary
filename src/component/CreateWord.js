import React, {useRef, useState} from 'react';
import {Button} from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import {useHistory} from "react-router";

const CreateWord = () => {
  let days = useFetch("http://localhost:3001/days");
  const [isLoading, setIsLoading] = useState(false);
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  const hisotry = useHistory();

  const saveWord = (e) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      fetch('http://localhost:3001/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        })
      }).then(response => {
        if (response.ok) {
          alert('Success save');
          hisotry.push(`/day/${dayRef.current.value}`)
        }
      });
    }

  }

  return (
    <div>
      <form>
        <div>
          <label>Eng</label>
          <input type="text" placeholder='word' ref={engRef}/>
        </div>
        <div>
          <label>Kor</label>
          <input type="text" placeholder='word' ref={korRef}/>
        </div>
        <div>
          <label>Day</label>
          <select ref={dayRef}>
            {days.map(day => <option key={day.id} value={day.day}>{day.day}</option>)}
          </select>
        </div>
        <Button onClick={saveWord}>{isLoading ? 'Saving...' : 'Save'}</Button>
      </form>
    </div>
  );
};

export default CreateWord;
