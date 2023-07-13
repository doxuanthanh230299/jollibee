import { Link } from 'react-router-dom';
import styles from './NotFount.module.scss';
import classNames from 'classnames/bind';
import ImgNotFound from '~/assets/img/404';

const cx = classNames.bind(styles);

const NotFound = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('flex-box')}>
                <div className={cx('left-box')}>
                    <div className={cx('header')}>404</div>
                    <div className={cx('text')}>Không tìm thấy trang</div>
                    <Link className={cx('button')} to="/">
                        Quay về trang chủ
                    </Link>
                </div>
                <img className={cx('right-box')} src={ImgNotFound.NotFound} alt="404" />
            </div>
        </div>
    );
};

export default NotFound;
