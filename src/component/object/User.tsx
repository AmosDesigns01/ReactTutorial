import React from 'react'



// creating an interface for the use component argument.
interface Props {
    name: string,
    status: string,
    salary: number
}

const User: React.FC<Props> = ({name, status, salary}) => {
  return (
    <div>
        <h1 style={{color: "blue"}}>Name: {name}</h1>
        <p>Status: {status}</p>
        <p>Salary: {salary}</p>
    </div>
  )
}

export default User