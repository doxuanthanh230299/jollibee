import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsMenu from '../ProductsMenu';
import styles from './SidebarMenu.module.scss';
import MediaQuery from 'react-responsive';

const cx = classNames.bind(styles);

function SidebarMenu({ isOpenSideBar, setIsOpenSideBar }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    useEffect(() => {
        // setIsOpenMenu(!isOpenMenu);
    }, [isOpenMenu]);

    return (
        <MediaQuery maxWidth={1224}>
            {isOpenSideBar && (
                <div
                    className={cx('wrapper')}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className={cx('close-btn')} onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className={cx('lang')}>VN/ENG</div>
                    <Link className={cx('menu-item')} to="/" onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                        <p>Trang Chủ</p>
                    </Link>
                    <Link className={cx('menu-item')} to="/info" onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                        <p>Về Jollibee</p>
                    </Link>
                    <div
                        className={cx('menu-item')}
                        onClick={() => {
                            setIsOpenMenu(!isOpenMenu);
                        }}
                    >
                        <p>Thực đơn</p>
                        {isOpenMenu && (
                            <ProductsMenu isOpenSideBar={isOpenSideBar} setIsOpenSideBar={setIsOpenSideBar} />
                        )}
                    </div>
                    <Link className={cx('menu-item')} to="/promotion" onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                        <p>Khuyến mãi</p>
                    </Link>
                    <Link className={cx('menu-item')} to="/service" onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                        <p>Dịch Vụ</p>
                    </Link>
                    <Link className={cx('menu-item')} to="/news" onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                        <p>Tin Tức</p>
                    </Link>
                    <Link className={cx('menu-item')} to="/stores" onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                        <p>Cửa hàng</p>
                    </Link>
                    <Link className={cx('menu-item')} to="/contact" onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                        <p>Liên Hệ</p>
                    </Link>
                    <Link className={cx('menu-item')} to="/recruit" onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                        <p>Tuyển dụng</p>
                    </Link>
                    <div className={cx('social')}>
                        <div className={cx('social-item')} href="">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className={cx('social-item')} href="">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className={cx('social-item')} href="">
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                    </div>
                </div>
            )}
        </MediaQuery>
    );
}

export default SidebarMenu;
