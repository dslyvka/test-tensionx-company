import { useState, useEffect } from 'react';

import fetchData from '../../../services/api';

import { TableStyled } from './Table.styled';
import { ArchivedTableStyled } from './ArchivedTable.styled';

export default function Table() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData().then(res => setStudents(res.data));
    fetchData().then(console.log);
  }, []);

  const archivedStudents = students.slice(students.length - 2, students.length);

  return (
    <>
      <TableStyled>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>Name</th>
            <th>ID</th>
            <th>Class</th>
            <th>Av. Score, %</th>
            <th>Av. Speed</th>
            <th>Parents</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{student.name}</td>
                <td>{student.id}</td>
                <td>{student.class}</td>
                <td
                  className={
                    parseInt(student.score) > 89
                      ? 'blue'
                      : parseInt(student.score) > 79
                      ? 'green'
                      : parseInt(student.score) > 49
                      ? 'yellow'
                      : 'red'
                  }
                >
                  {student.score}
                </td>
                <td
                  className={
                    student.speed === 'Above Expected'
                      ? 'blue'
                      : student.speed === 'As Expected'
                      ? 'green'
                      : 'red'
                  }
                >
                  {student.speed}
                </td>
                <td>
                  {student.parents.length
                    ? student.parents.reduce((acc, parent, index, array) => {
                        if (index + 1 !== array.length && index < array.length)
                          return acc + parent + ', ';
                        return acc + parent;
                      }, '')
                    : 'No Parents Added'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableStyled>
      <ArchivedTableStyled>
        <caption>Archived</caption>
        <tbody>
          {archivedStudents.map((student, index) => {
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{student.name}</td>
                <td>{student.id}</td>
                <td>{student.class}</td>
                <td>{student.score}</td>
                <td>{student.speed}</td>
                <td>
                  {student.parents.length
                    ? student.parents.reduce((acc, parent, index, array) => {
                        if (index + 1 !== array.length && index < array.length)
                          return acc + parent + ', ';
                        return acc + parent;
                      }, '')
                    : 'No Parents Added'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </ArchivedTableStyled>
    </>
  );
}
