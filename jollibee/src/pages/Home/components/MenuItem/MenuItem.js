import { Link } from 'react-router-dom';
import images from '~/assets/img/Home';
import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem() {
    return (
        <Link to="/" className={cx('wrapper')}>
            <div className={cx('top-wrapper')}>
                <img src={images.garonvuive} alt="" />
            </div>
            <div className={cx('bottom-wrapper')}>
                <img className={cx('title-item')} src={images.titleItem} alt="title-item" />
                <Button className={cx('btn')}>Đặt hàng</Button>
            </div>
        </Link>
    );
}

export default MenuItem;
