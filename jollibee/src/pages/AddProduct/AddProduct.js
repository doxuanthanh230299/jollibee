import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAllCategory } from '~/services/categoryService';
import Products from '../Products/Products';
import { createProduct } from '~/services/Api';

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const handleOnChangeInput = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
        console.log(product);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate('/products');
        // createProduct(
        //     {
        //         categoryId: product.categoryId,
        //         name: product.name,
        //         thumbnail: product.thumbnail,
        //         price: product.price,
        //     },
        //     {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     },
        // ).then(({ data }) => {
        //     console.log(data);
        // });
    };
    useEffect(() => {
        getAllCategory('ALL').then(({ data }) => {
            setCategories(data.categories);
        });
    }, []);
    return (
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Thêm sản phẩm</h1>
                </div>
            </div>
            {/*/.row*/}
            <div className="row">
                <div className="col-xs-6 col-md-12 col-lg-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">Thêm sản phẩm</div>
                        <div className="panel-body">
                            <div className="row" style={{ marginBottom: 40 }}>
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Danh mục</label>
                                        <select
                                            name="categoryId"
                                            className="form-control"
                                            value={product.categoryId}
                                            onChange={handleOnChangeInput}
                                        >
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Tên sản phẩm</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            value={product.name}
                                            onChange={handleOnChangeInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Giá sản phẩm (Giá chung)</label>
                                        <input
                                            type="number"
                                            name="price"
                                            className="form-control"
                                            value={product.price}
                                            onChange={handleOnChangeInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Trạng thái</label>
                                        <select name="state" className="form-control">
                                            <option value={1}>Còn hàng</option>
                                            <option value={0}>Hết hàng</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Ảnh sản phẩm</label>
                                        <input
                                            id="img"
                                            type="file"
                                            name="img"
                                            className="form-control"
                                            onChange={(e) => setProduct({ ...product, thumbnail: e.target.files[0] })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button
                                        className="btn btn-success"
                                        name="add-product"
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Thêm sản phẩm
                                    </button>
                                    <Link to="/products" className="btn btn-danger">
                                        Huỷ bỏ
                                    </Link>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>
            {/*/.row*/}
        </div>
    );
};

export default AddProduct;
