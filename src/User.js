import React from 'react'

const User = (props) => {
    console.log(props.data)
    const {data}=props
  return (
    <div>
      <h1>User</h1>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
    </div>
  )
}

export default User
