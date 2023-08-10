import styles from "./style.module.css"

import React from 'react'

const userObject = () => {
    // creating list of object that store users details.
    const users: any[] = [
        {name: "Oluwapelumi", status: "Senior DEV", salary: 20000000},
        {name: "Covenant", status: "Senior DEV", salary: 20000000},
        {name: "Miracle", status: "Senior DEV", salary: 20000000},
        {name: "Promise", status: "Senior DEV", salary: 20000000}
    ]
    console.log(users[0]);

  return (
    <div>
        {
            // mapping each of the user listed above.
            users.map((user) => {
                return(
                    <div>
                        <h1 style={{color: "blue"}}>Name: {user.name}</h1>
                        <p>Status: {user.status}</p>
                        <p>Salary: {user.salary}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default userObject