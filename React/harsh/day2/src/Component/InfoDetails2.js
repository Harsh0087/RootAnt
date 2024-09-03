import React from 'react'

export default function InfoDetails2(props) {
  return (
      <div>
          <tr>
              <td className='td'>{props.index2}</td>
              <td className='td'>{props.person2}</td>
              <td className='td'>{props.role2}</td>
          </tr>
    </div>
  )
}
