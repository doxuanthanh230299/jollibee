import MediaQuery from 'react-responsive';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import LanguageOptions from '~/components/LanguageOptions';
import HeaderMenu from '../HeaderMenu';
import LogInPopUp from '~/components/Button/LogInPopup/';
import { connect } from 'react-redux';
import Tippy from '@tippyjs/react/headless';
import * as actions from '~/redux/action';
import { dispatch } from '~/redux';
import { getAllUsers } from '~/services/userService';

const cx = classNames.bind(styles);

function Header(props) {
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [arrUsers, setArrUsers] = useState([]);

    const togglePopup = () => {
        setIsOpenLogin(!isOpenLogin);
    };


    const userList = (attrs) => (
        <div className={cx('user-list')} tabIndex="-1" {...attrs}>
            <div className={cx('user-item')}>Profile</div>
            <div className={cx('user-item')}>Đổi mật khẩu</div>
            <div className={cx('user-item')} onClick={() => dispatch(actions.PROCESS_LOGOUT())}>
                Đăng xuất
            </div>
        </div>
    );
    console.log(props);

    useEffect(() => {
        async function a() {
            const response = await getAllUsers('ALL');
            if (response && response.data.errCode === 0) {
                setArrUsers(response.data.users);
            }
        }
        a();
    }, []);

    return (
        <header className={cx('wrapper')}>
            {props.user.isLoggedIn === true ? <div className={cx('admin-nav')}><Link to='/dashboard'>Quản trị viên</Link></div> : null}
            <MediaQuery minWidth={1224}>
                <div className={cx('header-wrapper')}>
                    <div className={cx('panel-header')}>
                        <div className={cx('lang-options')}>
                            <LanguageOptions title="EN" icon={images.flagEn} to="/a" />
                            <LanguageOptions title="VN" icon={images.flagVn} to="/" />
                        </div>
                        <div className={cx('location')}>
                            <FontAwesomeIcon className={cx('location-icon')} icon={faLocationDot} />
                            <span className={cx('location-text')}>Hà Nội</span>
                        </div>
                        {props.user.isLoggedIn ? (
                            <div className={cx('user-menu')}>
                                <Tippy
                                    trigger="mouseenter click"
                                    interactive
                                    render={userList}
                                    offset={[0, 0]}
                                    placement={'bottom-start'}
                                >
                                    <div>
                                        Helloaaa
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </div>
                                </Tippy>
                            </div>
                        ) : (
                            <ul className={cx('user-menu')}>
                                <li className={cx('user-icon')}>
                                    <img src={images.iconUser} alt="IconUser" />
                                </li>
                                <li className={cx('register')}>
                                    <Link to="/register">Đăng ký</Link>
                                </li>
                                <li className={cx('log-in')} onClick={togglePopup}>
                                    Đăng Nhập
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </MediaQuery>

            <div className={cx('header-content')}>
                <MediaQuery maxWidth={1224}>
                    <div className={cx('menu-toggle')} onClick={() => props.setIsOpenSideBar(!props.isOpenSideBar)}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </MediaQuery>
                <Link to="/" className={cx('logo')}>
                    <img className={(cx('logo-img'), 'logo')} src={images.logo} alt="LogoImg" />    
                </Link>
                <MediaQuery minWidth={1224}>
                    <nav className={cx('header-menu')}>
                        <HeaderMenu />
                    </nav>
                </MediaQuery>
                <div className={cx('delivery')}>
                    <img src={images.delivery} alt="" />
                </div>
            </div>
            {isOpenLogin && <LogInPopUp togglePopup={togglePopup} />}
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         PROCESS_LOGOUT => dispatch(actions.PROCESS_LOGOUT()),
//     };
// };

export default connect(mapStateToProps)(Header);
