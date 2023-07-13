import classNames from 'classnames/bind';
import styles from './Service.module.scss';
import ServiceEntry from '../ServiceEntry';

const cx = classNames.bind(styles);

function Service() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-title')}>
                <p className={cx('title')}>DỊCH VỤ</p>
                <p className={cx('description')}>TẬN HƯỞNG NHỮNG KHOẢNH KHẮC TRỌN VẸN CÙNG JOLLIBEE</p>
            </div>
            <div className={cx('content')}>
                <ServiceEntry />
                <ServiceEntry />
                <ServiceEntry />
            </div>
        </div>
    );
}

export default Service;
