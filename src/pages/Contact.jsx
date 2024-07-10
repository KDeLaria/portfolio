import { useEffect, useState } from 'react'

function Contact() {

    // const defaultForm = { name: "", email: "", message: "" };
    // const [emailData, setEmailData] = useState(defaultForm);
    // const [emailWarning, setEmailWarning] = useState("");
    // const [nameWarning, setNameWarning] = useState("");
    // const [messageWarning, setMessageWarning] = useState("");
    // const [emailMessage, setEmailMessage] = useState("");//////////////////////////


    // function handleFormChange(e) {
    //     setEmailData({ ...emailData, [e.target.name]: e.target.value });
    //     checkFormFields();
    // };

    // async function sendMessage(e) {
    //     e.preventDefault();
    //     if (checkFormFields()) {
    //         try {
    //             const response = await fetch("/api/send", {
    //                 method: "POST",
    //                 body: JSON.stringify({
    //                     email: emailData.email,
    //                     name: emailData.name,
    //                     message: emailData.message
    //                 }),
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             });
    //             const result = await query.json();
    //             console.log(result)
    //             if (result.status === "error") {
    //                 console.log(result.message);
    //                 throw new Error("There was an error sending your message.  Please try again.");
    //             }
    //             else {
    //                 console.log("message sent");////////////////////
    //                 setEmailMessage("Your message has been sent. Thank you.");////////////////////////////
    //                 setEmailData(defaultForm);
    //             }
    //         }
    //         catch (error) {
    //             setEmailWarning("There was an error sending your message.  Please try again.");
    //         }
    //     }
    // }

    // function resetWarnings() {
    //     setNameWarning("");
    //     setEmailWarning("");
    //     setMessageWarning("");
    //     setEmailMessage("");
    // }

    // function checkFormFields() {
    //     resetWarnings();
    //     if (emailData.name !== "" && emailData.email !== ""
    //         && emailData.message !== "") { return emailIsValid(); }
    //     if (emailData.name === "") { setNameWarning("Name is required!") }
    //     if (emailData.email === "") { setEmailWarning("Email is required!") }
    //     if (emailData.message === "") { setMessageWarning("Message is required!") }
    //     return false;
    // }

    // function emailIsValid() {
    //     if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(emailData.email)) {
    //         return true;
    //     }
    //     else if (emailData.email === "") {
    //         setEmailWarning("Email is required!");
    //         return false;
    //     }
    //     else {
    //         setEmailWarning("Please enter a valid email.");
    //         return false;
    //     }
    // }


    return (
        <>
            <h2>Contact</h2><br />
            <div className="col-md-6 py-md-5">{/* remove 'py-md-5' when if content is added */}
                <p>Contact Kevin  on his <a href="https://www.linkedin.com/in/kevindelaria" target="_blank">
                    <i className='fab fa-linkedin'></i> LinkedIn
                </a>.
                </p>
                <br />
                <p>
                    Visit Kevin's <a href="https://github.com/KDeLaria" target="_blank">
                        <i className='fab fa-github'></i> GitHub
                    </a>.
                </p>
            </div>
        </>
    );
}

export default Contact;

// return (
//     <>
//         <h2>Contact</h2><br />
//         <div className="col-md-6">
//             <h3>Send Kevin a message</h3><br />
//             <form className='form'>
//                 <div className='col-md-3'>
//                     <label htmlFor="name">Name</label><br />
//                     <input name="name" id="name" value={emailData?.name || ""} onChange={handleFormChange}
//                         autoComplete='true' />
//                 </div>
//                 <div className='col-md-3'>
//                     <label htmlFor="email">Email</label><br />
//                     <input name="email" id="email" value={emailData?.email || ""} onChange={handleFormChange}
//                         autoComplete='true' />
//                 </div>
//                 <div className='col-md-3'>
//                     <label htmlFor="message">Message</label><br />
//                     <textarea name="message" id="message" cols="30" rows="10"
//                         value={emailData?.message || ""} onChange={handleFormChange}></textarea>
//                 </div>
//                 <button className='btn btn-primary' onClick={sendMessage}>Send</button>
//             </form>
//             <div>{nameWarning.length > 0 &&
//                 <span className='text-danger'>{nameWarning}</span>}</div>
//             <div>{emailWarning.length > 0 &&
//                 <span className='text-danger'>{emailWarning}</span>}</div>
//             <div>{messageWarning.length > 0 &&
//                 <span className='text-danger'>{messageWarning}</span>}</div>
//             <div>{emailMessage.length > 0 &&
//                 <span>{emailMessage}</span>}</div>
//         </div>
//     </>
// );
// };
