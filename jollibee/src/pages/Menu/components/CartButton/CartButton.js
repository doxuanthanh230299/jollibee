import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './CartButton.module.scss';
import { deleteProduct } from '~/redux/action';
import { connect } from 'react-redux';
import CurrentFormat from '~/utils/CurrentFormat';

const cx = classNames.bind(styles);

function CartButton(props) {
    return (
        <div className={cx('wrapper')} onClick={() => props.setIsOpenCart(!props.isOpenCart)}>
            <div className={cx('card-icon')}>
                <FontAwesomeIcon icon={faCartShopping} />
                <div className={cx('total')}>{props.total !== 0 && CurrentFormat(props.total)}</div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
