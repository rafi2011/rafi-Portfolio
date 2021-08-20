  
import React, {useState} from 'react';

import "./Contact.css";

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [hoverText, setHoverText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        const userMessage = {name, email, message}

        alert('Your message has been submitted! Thank you for your patience while I return your inquiry.');
    }


    

  return (
        <div class="container row align-items-start">
            <div class="col">
            </div>
            
            <div class="col">
                <br/><br/><br/><br/>
                <p id='hoverText'>{hoverText}</p>
                <br></br>
                <div className="myForm">
                    <form onSubmit={handleSubmit}>
                        <label>Your Name</label><br/>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /><br/>
                        <label>Email</label><br/>
                        <input
                            type="text"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        /><br/>
                        <label>Message</label><br/>
                        <textarea
                            type="text"
                            placeholder="Type your message here"
                            rows={8}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        /><br/>
                        <button>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            
            <div class="col">
            
            </div>
            <div><br/><br/><br/><br/><br/><br/></div>   
        </div>    
        
  );
}