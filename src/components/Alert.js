import React from 'react'

export default function Alert(props) {
    return (
        
        props.alert && <div className="container">
            <div className="alert alert-primary" role="alert" style={{ display: 'flex', height: '5px', alignItems: 'center', justifyContent: 'center', width: '50%', marginLeft: '25%' }}>
                <strong>{props.alert.type} </strong>{props.alert.msg}
            </div>
        </div>


    )
}
