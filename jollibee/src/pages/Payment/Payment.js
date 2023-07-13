import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { decreaseProduct, deleteProduct, increaseProduct } from '~/redux/action';
import { connect } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { createOrder, createOrderDetail } from '~/services/Api';
import CurrentFormat from '~/utils/CurrentFormat';

const cx = classNames.bind(styles);

function Payment(props) {
    console.log(props);
    const navigate = useNavigate();
    const [inputInfo, setInputInfo] = useState({});
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputInfo({ ...inputInfo, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        createOrder(
            {
                fullName: inputInfo.fullName,
                phoneNumber: inputInfo.phoneNumber,
                address: inputInfo.address,
                note: inputInfo.note,
                total: props.total,
            },
            {},
        ).then(({ data }) => {
            console.log(data);
            props.cart.map((cart) =>
                createOrderDetail(
                    {
                        orderId: data.order.id,
                        productId: cart.id,
                        num: cart.quantity,
                    },
                    {},
                ).then(({ data }) => {}),
            );
        });
        navigate('/thank');
    };

    useEffect(() => {
        document.title = 'Thanh Toán';
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>Thanh Toán</div>
            <form className={cx('section')}>
                <div className={cx('title')}>VUI LÒNG NHẬP THÔNG TIN LIÊN LẠC CỦA BẠN</div>
                <div className={cx('sub-title')}>
                    (*) QK vui lòng điền chính xác thông tin địa chỉ giao hàng (ghi chú Tòa nhà: ABC... nếu có)
                </div>
                <div className={cx('information')}>
                    <input
                        type="text"
                        placeholder="Họ tên"
                        name="fullName"
                        onChange={onChangeInput}
                        value={inputInfo.fullName || ''}
                    />
                    <input
                        type="text"
                        placeholder="Số điện thoại"
                        name="phoneNumber"
                        onChange={onChangeInput}
                        value={inputInfo.phoneNumber || ''}
                    />
                    {/* <select>
                        <option></option>
                    </select> */}
                    <input
                        type="text"
                        placeholder="Địa chỉ"
                        name="address"
                        onChange={onChangeInput}
                        value={inputInfo.address || ''}
                    />
                    <textarea placeholder="Ghi chú" name="note" onChange={onChangeInput} value={inputInfo.note || ''} />
                </div>
                <div className={cx('title')}>ĐƠN HÀNG CỦA BẠN</div>
                <div className={cx('cart-header')}>
                    <div className={cx('title', 'col-6')}>TÊN MÓN</div>
                    <div className={cx('title', 'col-3')}>SỐ LƯỢNG</div>
                    <div className={cx('title', 'col-3', 'text-right')}>ĐƠN GIÁ</div>
                </div>
                {props.cart.map((product) => (
                    <div className={cx('cart-item')}>
                        <div className={cx('product-name', 'col-6')}>
                            {product.name}
                            <div className={cx('delete-product')} onClick={() => props.deleteProduct(product)}>
                                x
                            </div>
                        </div>
                        <div className={cx('product-quantity', 'col-3')}>
                            <span className={cx('change-quantity')} onClick={() => props.increaseProduct(product)}>
                                +
                            </span>
                            <input
                                className={cx('show-order-number')}
                                type="text"
                                value={product.quantity === undefined ? (product.quantity = 1) : product.quantity}
                                readOnly
                            />
                            <span className={cx('change-quantity')} onClick={() => props.decreaseProduct(product)}>
                                -
                            </span>
                        </div>
                        <div className={cx('product-price', 'col-3', 'red', 'text-right')}>
                            {CurrentFormat(product.price) || '0'}
                        </div>
                    </div>
                ))}
                <div className={cx('cart-header')}>
                    <div className={cx('title', 'col-9')}>TỔNG</div>
                    <div className={cx('title', 'col-3', 'red', 'text-right')}>{CurrentFormat(props.total)}</div>
                </div>
                <div className={cx('payment')}>
                    <NavLink className={cx('btn')} to="/menu">
                        Đặt Thêm
                    </NavLink>
                    <button type="submit" onClick={onSubmit} className={cx('btn')}>
                        Thanh Toán
                    </button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartAr,
        total: state.cart.totalPriceProduct,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (product_current) => dispatch(deleteProduct(product_current)),
        increaseProduct: (product_current) => dispatch(increaseProduct(product_current)),
        decreaseProduct: (product_current) => dispatch(decreaseProduct(product_current)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
