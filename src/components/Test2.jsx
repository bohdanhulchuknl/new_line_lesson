import React, { memo} from 'react'

const Test2 = ({value}) => {
  console.log("test2")
  return (
    <div className='bg-green-500'>
      <h5>Test2</h5>
      {value}
    </div>
  )
}

export default memo(Test2)