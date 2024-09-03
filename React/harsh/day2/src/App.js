import React, { useState } from 'react';

const App = () => {
  const [teacherData, setTeacherData] = useState([
    { id: 1, name: 'Mr. Smith', subject: 'Math', experience: 10 },
    { id: 2, name: 'Ms. Johnson', subject: 'English', experience: 8 },
    { id: 3, name: 'Mr. Lee', subject: 'Science', experience: 12 }
  ]);

  const addDummyRecord = () => {
    const newRecord = {
      id: teacherData.length + 1,
      name: 'Mr. Dummy',
      subject: 'Art',
      experience: 5,
    };
    setTeacherData([...teacherData, newRecord]);
  };
  const deleteLastRecord = () => {
  setTeacherData(teacherData.slice(0,-1))
}

  return (
    <div>
      <h2>Teacher Table</h2>
      <TeacherTable
        data={teacherData}
        onAddRecord={addDummyRecord}
        onDeleteLastRecord={deleteLastRecord}
      />
    </div>
  );
};

const TeacherTable = ({ data, onAddRecord, onDeleteLastRecord }) => {
  return (
    <div>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Experience (Years)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onAddRecord}>Add Dummy Record</button>
      <button onClick={onDeleteLastRecord}>Delete Dummy Record</button>
    </div>
  );
};

export default App;

