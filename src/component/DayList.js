import React from 'react';
import dummy from '../DB/data.json';
import {Link} from "react-router-dom";

const DayList = () => {
    return (
        <div>
            <ul>
                {dummy.days.map(day => (
                  <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                  </li>
                ))}
            </ul>
        </div>
    );
};

export default DayList;
