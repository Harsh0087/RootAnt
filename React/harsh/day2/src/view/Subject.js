import React from 'react'

export default function Subject(props) {
  return (
      <div className='subjects'>
          <h2>
              <ol type='I'>
                  <li>{props.s1}</li>
                  <li>{props.s2}</li>
                  <li>{props.s3}</li>
              </ol></h2>
          <hr />
    </div>
  )
}
