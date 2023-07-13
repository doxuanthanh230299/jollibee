import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/img/Home';
import Button from '~/components/Button';
import styles from './ServiceEntry.module.scss';

const cx = classNames.bind(styles);

function ServiceEntry() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/">
                <img className={cx('img-service-entry')} src={images.serviceEntry} alt="" />
            </Link>
            <div>
                <div className={cx('title')}>JOLLIBEE KID CLUB</div>
                <Button primary>Xem thêm</Button>
            </div>
        </div>
    );
}

export default ServiceEntry;
