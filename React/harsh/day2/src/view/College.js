import React from 'react'

export default function College(props) {
  return (
      <div>
      <h1 className={props.stream}>
        {props.stream} with {props.course}</h1>
   
      
    </div>
  )
}
