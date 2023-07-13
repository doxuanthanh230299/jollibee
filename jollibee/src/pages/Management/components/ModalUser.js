import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalUser(props) {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
    });

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setInput({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        });
        setShow(true);
    };

    const checkValidateInput = () => {
        let isValid = true;
        for (const property in input) {
            if (input[property] === '') {
                isValid = false;
                alert('Missing parameter: ' + property);
                break;
            }
        }

        return isValid;
    };

    const handleAddNewUser = () => {
        const isValid = checkValidateInput();
        if (isValid === true) {
            props.createNewUser(input);
            setShow(false);
        }
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add new user
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Email{' '}
                        <input
                            type="text"
                            onChange={(e) => setInput({ ...input, email: e.target.value })}
                            value={input.email}
                        />
                        Password{' '}
                        <input
                            type="password"
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                            value={input.password}
                        />
                        First name{' '}
                        <input
                            type="text"
                            onChange={(e) => setInput({ ...input, firstName: e.target.value })}
                            value={input.firstName}
                        />
                        Last name{' '}
                        <input
                            type="text"
                            onChange={(e) => setInput({ ...input, lastName: e.target.value })}
                            value={input.lastName}
                        />
                        Address{' '}
                        <input
                            type="text"
                            onChange={(e) => setInput({ ...input, address: e.target.value })}
                            value={input.address}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddNewUser}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUser;
