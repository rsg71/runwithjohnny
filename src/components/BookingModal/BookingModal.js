import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { simulateNetworkRequest } from '../../utils/API';

function BookingModal({ title, show, handleClose, bodyText, btnText }) {

    const [isLoading, setIsLoading] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    // const [formVals, setFormVals] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: ''
    // })


    const submit = (e) => {
        e.preventDefault();

        // if (!firstName)


        setIsLoading(true);

        simulateNetworkRequest(500).then(() => {
            setIsLoading(false);
            setIsComplete(true);
        })
    }

    const styles = {
        formInput: 'form-control form-control-sm',
        formInputDiv: 'mb-2'
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

                    {isComplete &&
                        <div className="bg-success text-white p-3 mb-2">
                            Booking request sent! ✅
                        </div>
                    }

                    <div className="mb-3">
                        <form id="booking-form" onSubmit={submit}>
                            <div className={styles.formInputDiv}>
                                <label>Your first name</label>
                                <input className={styles.formInput} required disabled={isLoading || isComplete} type="text" />
                            </div>

                            <div className={styles.formInputDiv}>
                                <label>Your last name</label>
                                <input className={styles.formInput} required disabled={isLoading || isComplete} type="text" />
                            </div>

                            <div className={styles.formInputDiv}>
                                <label>Your email</label>
                                <input className={styles.formInput} required disabled={isLoading || isComplete} type="email" />
                            </div>

                            <div className={styles.formInputDiv}>
                                <label>Your phone</label>
                                <input className={styles.formInput} required disabled={isLoading || isComplete} type="text" minLength={10} maxLength={13} />
                            </div>


                            <div className="bg-light p-3 mb-2">
                                <p>Hi Johnny,</p>
                                <p>
                                    {bodyText}
                                </p>
                            </div>

                            <input type="submit" id="submit-form" className="hidden text-info" style={{ visibility: 'hidden' }} />

                        </form>
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