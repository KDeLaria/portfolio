import { useEffect, useState } from 'react'

function Contact() {

    const [emailData, setEmailData] = useState({});
    const [message, setMessage] = useState();


    function handleFormChange(e) {
        setMessage();
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
    }

    return (
        <>
            <h1>Contact</h1>
            <div className="col-6">
                <h3>Send Kevin a message</h3>
                <form className='form'>
                    <div className='col-3'>
                        <label htmlFor="name">Name</label>
                        <input name="name" value={emailData?.name || ""} onChange={handleFormChange} />
                    </div>
                    <div className='col-3'>
                        <label htmlFor="email">Email</label>
                        <input name="email" value={emailData?.email || ""} onChange={handleFormChange} />
                    </div>
                    <div className='col-3'>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10"
                            value={emailData?.message || ""} onChange={handleFormChange}></textarea>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;