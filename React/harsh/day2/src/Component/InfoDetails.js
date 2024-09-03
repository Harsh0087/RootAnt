import React from 'react'

export default function InfoDetails(props) {
  return (
    <div>
      
          <tr>
        <td className='td'>{props.index}</td>
        <td className='td'>{props.person}</td>
        <td className='td'>{props.role}</td>
        </tr>
          
        
    </div>
  )
}
