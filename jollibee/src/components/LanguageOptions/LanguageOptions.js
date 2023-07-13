import styles from './LanguageOptions.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function LanguageOptions({ title, icon, to }) {
    return (
        <NavLink className={(nav) => cx('wrapper', { active: nav.isActive })} to={to}>
            <img className={cx('logo')} src={icon} alt={title} />
            <p className={cx('title')}>{title}</p>
        </NavLink>
    );
}

export default LanguageOptions;
