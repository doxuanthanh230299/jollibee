import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct, getProduct } from '~/services/Api';
import { getAllCategory } from '~/services/categoryService';
import setImage from '~/utils/setImage';

const EditProduct = () => {
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleOnChangeInput = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };
    const handleEditProduct = (e) => {
        e.preventDefault();
        navigate('/products');
        editProduct({
            id: product.id,
            categoryId: product.categoryId,
            name: product.name,
            price: product.price,
        }).then(({ data }) => {
            console.log(data);
        });
    };
    useEffect(() => {
        getAllCategory('ALL').then(({ data }) => {
            setCategories(data.categories);
        });
        getProduct(id).then(({ data }) => {
            setProduct(data.product);
        });
    }, [id]);
    return (
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Sửa sản phẩm</h1>
                </div>
            </div>
            {/*/.row*/}
            <div className="row">
                <div className="col-xs-6 col-md-12 col-lg-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">Sửa sản phẩm</div>
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
                                            value={product?.name}
                                            onChange={handleOnChangeInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Giá sản phẩm (Giá chung)</label>
                                        <input
                                            type="number"
                                            name="price"
                                            className="form-control"
                                            value={product?.price}
                                            onChange={handleOnChangeInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Trạng thái</label>
                                        <select name="state" className="form-control">
                                            <option value={1}>Còn hàng</option>
                                            <option selected value={0}>
                                                Hết hàng
                                            </option>
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
                                            className="form-control hidden"
                                            onChange={(e) => setProduct({ ...product, img: e.target.files[0] })}
                                        />
                                        <img
                                            id="avatar"
                                            className="thumbnail"
                                            width="100%"
                                            height="350px"
                                            alt={product?.name}
                                            src={setImage(product?.thumbnail)}
                                        />
                                    </div>
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

export default EditProduct;
