import React from "react";
import styles from "./style.module.css";


const User = () => {
    return(
        <div>
            <Job company="Amazon" salary={20000} position="Senior DEV" userAge={userAge}/>
        </div>
    )
}

// defining interface for passing arguments in Job function/Component
interface Props {
    company: string,
    salary: number,
    position: string,
    userAge: any 
}

const age: number = 18
const userAge = prompt("How old are you? ");


// creating a component for Job while pass props argument to make the component dynamic.
const Job: React.FC<Props> = ({company, salary, position, userAge}) => {

    return(
        <div>
            <h1 className={styles.company}>Company: {company}</h1>
            <h1>Salary: {salary}</h1>
            <h1>Position: {position}</h1>
            <h1>Age: {userAge >= 18 ? userAge : `Sorry you are ${userAge} 😞, this page is meant for an Adult.`}</h1>
        </div>
    )
}

export default User