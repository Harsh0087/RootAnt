import React from 'react'

export default function StudentData({data}) {
  return (
      <div>
          <table border={1}>
              <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Marks</th>
              </tr>
              <tbody>
                  {data.map((teacher) => (
                      <tr>
                          <td>{teacher.id}</td>
                          <td>{teacher.nm}</td>
                          <td>{teacher.marks}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
    </div>
  )
}
