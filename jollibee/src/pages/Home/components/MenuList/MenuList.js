import classNames from 'classnames/bind';
import styles from './MenuList.module.scss';
import images from '~/assets/img';
import MenuItem from '../MenuItem';

const cx = classNames.bind(styles);

function MenuList() {
    return (
        <div className={cx('today-menu')}>
            <div className={cx('intro')}>
                <img className="logo" src={images.logoFooter} alt="logo" />
                <p className={cx('intro-title')}>Ăn Gì Hôm Nay</p>
                <p className={cx('intro-description')}>
                    Thực đơn Jollibee đa dạng và phong phú, có rất nhiều sự lựa chọn cho bạn, gia đình và bạn bè.
                </p>
            </div>
            <div className={cx('main-today-menu')}>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </div>
    );
}

export default MenuList;
