import React from 'react'
import App from '../App'
export default function TeacherData({ data }) {
  // const addTeacher = () => {
  //   const newteacher = {
  //     id: 1,
  //     nm: "harsh",
  //     sub:"science"
  //   }
  //  setTeacherData([...teacherData,newteacher])
  // }
  return (
    <div>
      <table border={1}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Subject</th>
        </tr>
        <tbody>
          {data.map((teacher) => (
            <tr>
              <td>{teacher.id}</td>
              <td>{teacher.nm}</td>
              <td>{teacher.sub}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addTeacher}>Add</button>
    </div>
  )
}
