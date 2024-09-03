import React from 'react'
import InfoDetails2 from './InfoDetails2'

export default function Info2() {
  return (
      <div>
          <table border={2}>
              <InfoDetails2 index2="a)" person2="The vice Chancellor" role2="Chairman" />
              <InfoDetails2 index2="b)" person2="One eminent academician nominated by the State Government as its representative; and" role2="Member" />
              <InfoDetails2 index2="c)" person2="Such other members as may be prescribed." role2="Member" />
          </table>
    </div>
  )
}
