import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { HexagonIcon } from '~/assets/Icons';
import styles from './CircleBanner.module.scss';

const cx = classNames.bind(styles);

function CircleBanner({ title }) {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading')}>{title}</h1>
            <HexagonIcon />
            <p className={cx('description')}>TẬN HƯỞNG NHỮNG KHOẢNH KHẮC TRỌN VẸN CÙNG JOLLIBEE</p>
            <span className={cx('scroll-down')}>
                <FontAwesomeIcon icon={faAngleDoubleDown} />
            </span>
        </div>
    );
}

export default CircleBanner;
