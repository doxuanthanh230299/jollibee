import classNames from 'classnames/bind';
import styles from './Container.module.scss';

const cx = classNames.bind(styles);

function Container() {
    return <div className={cx('wrapper')}></div>;
}

export default Container;
