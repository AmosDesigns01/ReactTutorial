import React from "react";

// devcard porperties
interface DevCardProps{
    name: string
    stack: string
}

const DevCard: React.FC<DevCardProps> = ({name, stack}) => {
    return(
        <div style={{background: "gray", color: "#fff"}}>
            <div style={{textAlign: "center"}}>
                <h3>{name}</h3>
                <p>{stack}</p>
            </div>
        </div>
    )
}

export default DevCard;