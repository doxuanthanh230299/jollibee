import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ServiceEntry.module.scss';

const cx = classNames.bind(styles);

function ServiceEntry({ img, title, description, link }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-left')}>
                <img src={img} alt=""  style={{display:'block',width: '100%'}}/>
            </div>
            <div className={cx('box-right')}>
                <h1 className={cx('title')}>{title}</h1>
                <p className={cx('description')}>{description}</p>
                <Button to={link} primary>
                    Xem thêm
                </Button>
            </div>
        </div>
    );
}

export default ServiceEntry;
