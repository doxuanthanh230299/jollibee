import { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Tab, Tabs } from 'react-bootstrap';
import { categoryService, productService } from '~/services';
import ModalProduct from './components/ModalProduct';
import ModalEditProduct from './components/ModalEditProduct';
import CurrentFormat from '~/utils/CurrentFormat';
import { Link, useLocation } from 'react-router-dom';

function Products() {
    const [arrProducts, setArrProducts] = useState([]);
    const [arrCategory, setArrCategory] = useState([]);
    const [isOpenEditProduct, setIsOpenEditProduct] = useState(false);
    const [productEdit, setProductEdit] = useState({});
    const [key, setKey] = useState('0');
    const { state } = useLocation();
    // Get All Products
    const getAllProductsFromReact = async () => {
        const response = await productService.getAllProduct();
        if (response && response.data.errCode === 0) {
            setArrProducts(response.data.products);
        }
    };

    // Get All Category
    const getAllCategoryFromReact = async () => {
        const response = await categoryService.getAllCategory();
        if (response && response.data.errCode === 0) {
            setArrCategory(response.data.categories);
        }
    };

    // Create New Product
    const createNewProduct = async (data) => {
        try {
            const response = await productService.createNewProductService(data);
            if (response && response.data.errCode !== 0) {
                alert(response.data.errMessage);
            } else {
                await getAllProductsFromReact();
            }
        } catch (e) {
            console.log(e);
        }
    };

    // Delete Product
    const deleteProduct = async (productId) => {
        // eslint-disable-next-line no-restricted-globals
        const isConfirm = confirm('Bạn có chắc muốn xoá sản phẩm này');
        if (isConfirm) {
            try {
                const response = await productService.deleteProductService(productId);
                if (response && response.data.errCode !== 0) {
                    alert(response.data.errMessage);
                } else {
                    await getAllProductsFromReact();
                }
            } catch (e) {
                console.log(e);
            }
        }
    };

    // Edit product
    const handleEditProduct = async (product) => {
        await setProductEdit(product);
        setIsOpenEditProduct(true);
    };

    const doEditProduct = async (product) => {
        try {
            let res = await productService.editProductService(product);
            if (res && res.data.errCode === 0) {
                getAllProductsFromReact();
                setIsOpenEditProduct(false);
            } else {
                console.log(res);
                alert(res.data.errMessage);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getAllCategoryFromReact();
        getAllProductsFromReact();
    }, []);

    return (
        <>
            {/* <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                {arrCategory.map((item, index) => (
                    <Tab eventKey={index.toString()} title={item.name} key={item.id}>
                        <ModalProduct createNewProduct={createNewProduct} item={item} />

                        <Row>
                            {arrProducts.map((product) => {
                                if (product.categoryId === item.id) {
                                    return (
                                        <Col lg={4} md={2} sm={1} key={product.id}>
                                            <Card key={product.id}>
                                                <Card.Img
                                                    variant="top"
                                                    src={`${process.env.REACT_APP_BACKEND_URL}/${product.thumbnail}`}
                                                />
                                                <Card.Body>
                                                    <Card.Title>{product.name}</Card.Title>
                                                    <Card.Text>{product.price}.000đ</Card.Text>
                                                    <ModalEditProduct
                                                        currentProduct={product}
                                                        isOpenEditProduct={isOpenEditProduct}
                                                        setIsOpenEditProduct={setIsOpenEditProduct}
                                                        doEditProduct={doEditProduct}
                                                    />
                                                    <Button variant="primary" onClick={() => deleteProduct(product.id)}>
                                                        Xóa
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    );
                                }
                                return null;
                            })}
                        </Row>
                    </Tab>
                ))}
            </Tabs> */}
            <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                <div className="row">
                    <ol className="breadcrumb">
                        <li>
                            <a href="#">
                                <svg className="glyph stroked home">
                                    <use xlinkHref="#stroked-home" />
                                </svg>
                            </a>
                        </li>
                        <li className="active">Danh sách sản phẩm</li>
                    </ol>
                </div>
                {/*/.row*/}
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Danh sách sản phẩm</h1>
                    </div>
                </div>
                {/*/.row*/}
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-body">
                                <div className="bootstrap-table">
                                    <div className="table-responsive">
                                        <div className="alert bg-success" role="alert">
                                            <svg className="glyph stroked checkmark">
                                                <use xlinkHref="#stroked-checkmark" />
                                            </svg>
                                            Đã thêm thành công
                                            <div className="pull-right">
                                                <span className="glyphicon glyphicon-remove" />
                                            </div>
                                        </div>
                                        <Link to="/addProduct" className="btn btn-primary">
                                            Thêm sản phẩm
                                        </Link>
                                        <table className="table table-bordered" style={{ marginTop: 20 }}>
                                            <thead>
                                                <tr className="bg-primary">
                                                    <th>ID</th>
                                                    <th>Thông tin sản phẩm</th>
                                                    <th>Giá sản phẩm</th>
                                                    <th>Tình trạng</th>
                                                    <th>Danh mục</th>
                                                    <th width="18%">Tùy chọn</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {arrProducts?.map((product, index) => (
                                                    <tr key={product.id}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <img
                                                                        src={`${process.env.REACT_APP_BACKEND_URL}/${product.thumbnail}`}
                                                                        alt={product.name}
                                                                        width="100px"
                                                                        className="thumbnail"
                                                                    />
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <strong>{product.name}</strong>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{CurrentFormat(product.price)}</td>
                                                        <td>
                                                            <a className="btn btn-success" href="#" role="button">
                                                                Còn hàng
                                                            </a>
                                                        </td>
                                                        <td>
                                                            {arrCategory.map((category) => {
                                                                if (category.id === product?.categoryId) {
                                                                    return category.name;
                                                                }
                                                                return null;
                                                            })}
                                                        </td>
                                                        <td>
                                                            <Link
                                                                to={`/editProduct/${product.id}`}
                                                                className="btn btn-warning"
                                                            >
                                                                <i className="fa fa-pencil" aria-hidden="true" /> Sửa
                                                            </Link>
                                                            <Button
                                                                variant="primary"
                                                                className="btn btn-danger"
                                                                onClick={() => deleteProduct(product.id)}
                                                            >
                                                                Xóa
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div align="right">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        Trở lại
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        3
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        tiếp theo
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                        {/*/.row*/}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
