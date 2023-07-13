import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './BoxContent.module.scss';

const cx = classNames.bind(styles);

function BoxContent({ img, title, previewContent, link }) {
    return (
        <Link className={cx('wrapper')} to={link}>
            <img className={cx('image')} src={img} alt="" />
            <div className={cx('title')}>{title}</div>
            <p className={cx('preview-content')}>{previewContent}</p>
        </Link>
    );
}

export default BoxContent;
