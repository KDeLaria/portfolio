import { useEffect, useState } from 'react'

function Contact() {

    const defaultForm = {name: "", email: "", message: ""};
    const [emailData, setEmailData] = useState(defaultForm);
    const [emailWarning, setEmailWarning] = useState("");
    const [nameWarning, setNameWarning] = useState("");
    const [messageWarning, setMessageWarning] = useState("");
    const [fauxMessage, setFauxMessage] = useState("");//////////////////////////


    function handleFormChange(e) {
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
        checkFormFields();
    };

    function sendMessage(e) {
        e.preventDefault();
        if (checkFormFields()) {
            console.log("sending email");////////////////////
            setFauxMessage("sending email");////////////////////////////
            setEmailData(defaultForm);
        }
    }

    function resetWarnings () {
        setNameWarning("");
        setEmailWarning("");
        setMessageWarning("");
        setFauxMessage("");
    }

    function checkFormFields () {
        resetWarnings();
        if(emailData.name !== "" && emailData.message !== "") { return emailIsValid(); }
        if (emailData.name === "") {setNameWarning("Name is required!")}
        if (emailData.message === "") {setMessageWarning("Message is required!")}
        return false;
    }

    function emailIsValid () {
        if(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(emailData.email)) {
            return true;
        }
        else if (emailData.email === "") {
            setEmailWarning("Email is required!"); 
            return false;
        }
        else{
            setEmailWarning("Please enter a valid email.");
            return false;
        }       
    }


    return (
        <>
            <h2>Contact</h2><br />
            <div className="col-md-6">
                <h3>Send Kevin a message</h3><br />
                <form className='form'>
                    <div className='col-md-3'>
                        <label htmlFor="name">Name</label><br />
                        <input name="name" id="name" value={emailData?.name || ""} onChange={handleFormChange}
                        autoComplete='true' />
                    </div>
                    <div className='col-md-3'>
                        <label htmlFor="email">Email</label><br />
                        <input name="email" id="email" value={emailData?.email || ""} onChange={handleFormChange}
                        autoComplete='true' />
                    </div>
                    <div className='col-md-3'>
                        <label htmlFor="message">Message</label><br />
                        <textarea name="message" id="message" cols="30" rows="10"
                            value={emailData?.message || ""} onChange={handleFormChange}></textarea>
                    </div>
                    <button className='btn btn-primary' onClick={sendMessage}>Send</button>
                </form>
                    <div>{ nameWarning.length > 0 &&
                        <span className='text-danger'>{nameWarning}</span>}</div>
                    <div>{ emailWarning.length > 0 &&
                        <span className='text-danger'>{emailWarning}</span>}</div>
                    <div>{ messageWarning.length > 0 &&
                        <span className='text-danger'>{messageWarning}</span>}</div>
                    <div>{ fauxMessage.length > 0 &&
                        <span>{fauxMessage}</span>}</div>
            </div>
        </>
    );
};

export default Contact;