import React from 'react'

export default function Contact(props) {
    return (
        <>
            <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h1 style={{ color: props.mode === 'light' ?'black':'white'}}>{props.heading}</h1>
            <p style={{ color:props.mode==='light'?'blue':'white' }}>WE Are available on 24*7*365 . this is testing page of this react application and i Hope this will make sound good </p>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label" >Username</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name-xyz" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label" >Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <label for="inputPassword5" className="form-label">Mobile No.</label>
            <input type="number" id="inputContact5" className="form-control" aria-describedby="passwordHelpBlock" />
            <div id="contact" className="form-text"></div>
            <button className='btn btn-primary' style={{ position: 'absolute', right: '10%' }}>Submit</button>
        </div >
        </>

    )
}
