import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailjs from 'emailjs-com';

function BookingModal({ title, show, handleClose, bodyText, btnText }) {

    const [isLoading, setIsLoading] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [error, setError] = useState(false);

    const styles = {
        formInput: 'form-control form-control-sm',
        formInputDiv: 'mb-2'
    }

    const submit = (e) => {
        e.preventDefault();

        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const userId = process.env.REACT_APP_USER_ID;

        setIsLoading(true);

        emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((result) => {
                console.log(result.text);
                setIsLoading(false);
                setError(false);
                setIsComplete(true);
            }, (error) => {
                setIsLoading(false);
                setError(true);
                setIsComplete(false);
                console.log('error sending email: ', error.text);
            });
    }


    return (
        <div
            className="modal show text-dark"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ color: 'black' }}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-dark">

                    <div className="mb-3">
                        <form id="booking-form" onSubmit={submit}>
                            <div className={styles.formInputDiv}>
                                <label>Your first name</label>
                                <input name="first_name" className={styles.formInput} required disabled={isLoading || isComplete} type="text" />
                            </div>

                            <div className={styles.formInputDiv}>
                                <label>Your last name</label>
                                <input name="last_name" className={styles.formInput} required disabled={isLoading || isComplete} type="text" />
                            </div>

                            <div className={styles.formInputDiv}>
                                <label>Your email</label>
                                <input name="user_email" className={styles.formInput} required disabled={isLoading || isComplete} type="email" />
                            </div>

                            <div className={styles.formInputDiv}>
                                <label>Your phone</label>
                                <input name="user_phone" className={styles.formInput} required disabled={isLoading || isComplete} type="text" minLength={10} maxLength={13} />
                            </div>


                            <div className="bg-light p-3 mb-2">
                                <p>Hi Johnny,</p>
                                <p>
                                    {bodyText}
                                </p>
                                <input name="bodyText" type="hidden" value={bodyText} />
                            </div>

                            <input type="submit" id="submit-form" className="hidden text-info" style={{ visibility: 'hidden' }} />

                        </form>

                        {isComplete && <div className="p-5 greenBadge mt-3"> ✔ Message sent successfully </div>}
                        {error && <div className="text-danger">There was an error submitting the form</div>}
                    </div>




                </Modal.Body>
                <Modal.Footer>

                    {!isComplete &&
                        <>
                            <Button variant="outline-secondary" onClick={handleClose}>
                                Cancel
                            </Button>

                            <label for="submit-form" tabindex="0" className="btn btn-success">{isLoading ? 'Submitting...' : btnText}</label>

                        </>
                    }

                    {isComplete &&
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Close
                        </Button>
                    }

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BookingModal;