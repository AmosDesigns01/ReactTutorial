import styles from "./style.module.css"

import React from 'react'

const userObject = () => {
    // creating list of object that store users details.
    const users: any[] = [
        {name: "Oluwapelumi", status: "Senior DEV", salary: 20000000},
        {name: "Covenant", status: "Senior DEV", salary: 20000000},
        {name: "Miracle", status: "Senior DEV", salary: 20000000},
        {name: "Promise", status: "Senior DEV", salary: 20000000},
        {name: "Victoria", status: "Senior DEV", salary: 20000000},
        {name: "David", status: "Senior DEV", salary: 20000000},
        {name: "Adedayo", status: "Senior DEV", salary: 20000000},
    ]
    console.log(users[0]);


    // Main web page return.
  return (
    <div>
        {
            // mapping each of the user listed above.
            users.map((user) => {
                return(
                    <User name={user.name} status={user.status} salary={user.salary}/>
                )
            })
        }
    </div>
  )
}

// creating an interface for the use component argument.
interface Props {
    name: string,
    status: string,
    salary: number
}

const User: React.FC<Props> = ({name, status, salary}) => {
    return(
        <div>
            <h1 style={{color: "blue"}}>Name: {name}</h1>
            <p>Status: {status}</p>
            <p>Salary: {salary}</p>
        </div>
    )
}

export default userObject