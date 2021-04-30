import React from 'react'

function Card(email,fullName,avatar) {
    return (
        <div className="card" style={{width:"18ren"}}>
        <img src={avatar} className="card-img-top" alt="avatar"></img>
        <div className="card-body">
        <p className="card-text">{fullName}</p>
        <p className="card-text">{email}</p>
        </div>
        </div>
    )
}

export default Card;