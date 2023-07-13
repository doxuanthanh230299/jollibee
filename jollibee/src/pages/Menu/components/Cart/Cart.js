import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { deleteProduct, increaseProduct, decreaseProduct } from '~/redux/action';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import CurrentFormat from '~/utils/CurrentFormat';

const cx = classNames.bind(styles);

function Cart(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('minimize')} onClick={() => props.setIsOpenCart(!props.isOpenCart)}>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className={cx('product-list')}>
                {props.cart.map((product) => (
                    <div className={cx('product-item')} key={product.id}>
                        <div className={cx('row')}>
                            <div className={cx('name')}>{`${product.name}`}</div>
                            <div
                                className={cx('delete-btn')}
                                onClick={() => {
                                    props.deleteProduct(product);
                                }}
                            >
                                <button>X</button>
                            </div>
                        </div>

                        <div className={cx('row')}>
                            <div className={cx('quantity')}>
                                <div className={cx('change-quantity')} onClick={() => props.decreaseProduct(product)}>
                                    -
                                </div>
                                <span className={cx('product-quantity')}>
                                    {product.quantity === undefined ? 1 : product.quantity}
                                </span>
                                <div className={cx('change-quantity')} onClick={() => props.increaseProduct(product)}>
                                    +
                                </div>
                            </div>
                            <div className={cx('price')}>
                                {product.quantity === undefined
                                    ? CurrentFormat(product.price)
                                    : CurrentFormat(product.price * product.quantity)}
                            </div>
                        </div>
                    </div>
                ))}
                <div className={cx('total')}>Tổng: {CurrentFormat(props.total)}</div>
                <NavLink to="/thanh-toan" className={cx('pay-btn')}>
                    Thanh toán
                </NavLink>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
