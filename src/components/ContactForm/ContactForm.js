import { useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import emailjs from 'emailjs-com';


export default function ContactForm() {


    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


    function sendEmail(e) {
        e.preventDefault();

        setSending(true);

        const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_CONTACT_PAGE_TEMPLATE_ID;
        const USER_ID = process.env.REACT_APP_USER_ID;

        // these IDs from the previous steps

        if (!SERVICE_ID) {
            console.log('missing SERVICE_ID');
            setSending(false);
            setError(true);
            return;
        }

        if (!TEMPLATE_ID) {
            console.log('missing TEMPLATE_ID');
            setSending(false);
            setError(true);
            return;
        }

        if (!USER_ID) {
            console.log('missing USER_ID');
            setSending(false);
            setError(true);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                setSending(false);
                setError(false);
                setSuccess(true);
            }, (error) => {
                setSending(false);
                setError(true);
                setSuccess(false);
                console.log(error.text);
            });
    }

    const sendingInputStyle = "form-control mb-2 sendingForm text-light";






    return (
        <>
            <Row className="m-5">
                <Col sm={12} lg={6} className="">
                    <Row>
                        <div className="contactEmailPhone">
                            <h1 className=""><i className="far fa-envelope"></i> Email:</h1>
                            <a href="mailto:johnny.hogue3@gmail.com" className='noUnderLine'>johnny.hogue3@gmail.com</a>
                        </div>
                    </Row>
                    <Row>
                        <div className="contactEmailPhone">
                            <h1 className=""><i className="fas fa-phone-alt"></i> Phone: </h1>
                            <a href="tel:2159137231" className='noUnderLine'> (304) 481  9397</a>
                        </div>
                    </Row>
                </Col>

                <Col sm={12} lg={6} className="mb-5">
                    {!success &&
                        <form id="contact-form" onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="hidden" name="contact_number" />
                                <label htmlFor="username">Your Name</label>
                                <input name="user_name" type="text" className={sending ? sendingInputStyle : "form-control mb-2"} id="username" required disabled={sending} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="useremail">Your Email</label>
                                <input name="user_email" type="email" className={sending ? sendingInputStyle : "form-control mb-2"} id="useremail" placeholder="name@mail.com"
                                    required disabled={sending} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputTextarea">Message</label>
                                <textarea name="message" className={sending ? sendingInputStyle : "form-control mb-2"} id="usermessage" rows="3" required disabled={sending} ></textarea>
                            </div>

                            <input type="hidden" name="_subject" value="Contact Page Email" />
                            <input type="hidden" name="_next" value="https://runwithjohnny.com/contact" />


                            <button type="submit" className="btn btn-primary mt-2" id="contactSubmitBtn" value="Submit" disabled={sending}>
                                {sending && <span>  <Spinner animation="border" variant="light" size="sm" /> Sending...</span>}
                                {!sending && "Submit"}
                            </button>


                        </form>
                    }

                    {success && <div className="p-5 greenBadge mt-3"> ✔ Message sent successfully </div>}
                    {error && <div className="text-danger">There was an error submitting the form</div>}


                </Col>
            </Row>
        </ >
    );
}
