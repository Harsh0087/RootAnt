import React from 'react'
import InfoDetails from './InfoDetails'
const data1 = [
  {id:1,nm: 'The Chancellor', rl: 'Chairman'},
  { id: 2, nm: "The Vice Chancellor", rl: "Member"},
  { id: 3, nm: "One expert of Chancellor", rl: "Member"}]
export default function Info() {
  return (
    <div>
      
      
          <table border={2}>

              <InfoDetails index="a)" person="The Chancellor" role="Chairman" />
        <InfoDetails index="b)" person="The Vice Chancellor" role="Member" />
        <InfoDetails index="c)" person="One expert of Chancellor" role="Member" />



        {/* {data1.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.nm}</td>
              <td>{val.rl}</td>
              
            </tr>
          )
        })} */}
      </table>
      
    </div>
  )
}
