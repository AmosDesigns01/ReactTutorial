import React from "react"
import "./User.css"

const User = () => {
    return(
        <div>
            <Job company="Amazon" salary={20000} position="Senior DEV"/>
        </div>
    )
}

// defining interface for passing arguments in Job function/Component
interface Props {
    company: string,
    salary: number,
    position: string
}

// creating a component for Job while pass props argument to make the component dynamic.
const Job: React.FC<Props> = ({company, salary, position}) => {
    return(
        <div>
            <h1>{company}</h1>
            <h1>{salary}</h1>
            <h1>{position}</h1>
        </div>
    )
}

export default User