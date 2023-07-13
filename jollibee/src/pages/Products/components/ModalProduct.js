import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalProduct(props) {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState({
        categoryId: props.item.id,
        name: '',
        price: '',
        discount: '',
        thumbnail: null,
        valueVi: '',
        valueEn: '',
    });

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setInput({
            categoryId: props.item.id,
            name: '',
            price: '',
            discount: '',
            thumbnail: null,
            valueVi: '',
            valueEn: '',
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

    const handleAddNewProduct = () => {
        const isValid = checkValidateInput();
        if (isValid === true) {
            props.createNewProduct(input);
            setShow(false);
        }
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Thêm Sản Phẩm
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm Sản Phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Danh mục sản phẩm</Form.Label>
                            <Form.Control className="mt-0" disabled value={props.item.name} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Tên sản phẩm</Form.Label>
                            <Form.Control
                                className="mt-0"
                                type="text"
                                placeholder="Nhập tên sản phẩm"
                                onChange={(e) => setInput({ ...input, name: e.target.value, valueVi: e.target.value })}
                                value={input.name}
                            />
                            {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Giá</Form.Label>
                            <Form.Control
                                className="mt-0"
                                type="text"
                                placeholder="Nhập giá sản phẩm"
                                onChange={(e) => setInput({ ...input, price: e.target.value })}
                                value={input.price}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Giảm giá</Form.Label>
                            <Form.Control
                                className="mt-0"
                                type="text"
                                placeholder="Giảm giá"
                                onChange={(e) => setInput({ ...input, discount: e.target.value })}
                                value={input.discount}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>English name</Form.Label>
                            <Form.Control
                                className="mt-0"
                                type="text"
                                placeholder="English name"
                                onChange={(e) => setInput({ ...input, valueEn: e.target.value })}
                                value={input.valueEn}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFile">
                            <Form.Label>Ảnh sản phẩm</Form.Label>
                            {/* <Form.Control
                                type="file"
                                onChange={(e) => setInput({ ...input, thumbnail: e.target.files[0] })}
                            /> */}
                            <input type="file" onChange={(e) => setInput({ ...input, thumbnail: e.target.files[0] })} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddNewProduct}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalProduct;
