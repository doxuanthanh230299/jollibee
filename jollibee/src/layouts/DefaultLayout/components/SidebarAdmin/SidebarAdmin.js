import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarAdmin.module.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function SidebarAdmin() {
    const { pathname } = useLocation();
    const MENU_ITEMS = [
        {
            title: 'Tổng quan',
            link: 'dashboard',
        },
        {
            title: 'Báo cáo',
            link: 'combo-ban-chay',
        },
        {
            title: 'Hóa đơn',
            link: 'order',
        },
        {
            title: 'Sản phẩm',
            link: 'products',
        },
        {
            title: 'Nhân viên',
            link: 'combo-ban-chay',
        },
    ];
    return (
        // <div className={cx('wrapper')}>
        //     <Link className={cx('logo')} to="/quan-tri">
        //         <img src={images.logo} alt="logo" />
        //     </Link>
        //     <div className={cx('user')}></div>
        //     <ul className={cx('menu')}>
        //         {MENU_ITEMS.map((item, index) => (
        //             <li className={cx('menu-item')} key={index}>
        //                 <NavLink
        //                     className={(nav) => cx({ active: nav.isActive })}
        //                     to={{ pathname: `/${item.link}`, state: { stateParam: true } }}
        //                 >
        //                     <span>{item.title}</span>
        //                 </NavLink>
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
            <form role="search"></form>
            <ul className="nav menu">
                <li className={pathname === '/dashboard' ? 'active' : null}>
                    <Link to="/dashboard">
                        <svg className="glyph stroked dashboard-dial">
                            <use xlinkHref="#stroked-dashboard-dial" />
                        </svg>{' '}
                        Tổng quan
                    </Link>
                </li>
                <li className={pathname === '/categories' ? 'active' : null}>
                    <Link to="/categories">
                        <svg className="glyph stroked clipboard with paper">
                            <use xlinkHref="#stroked-clipboard-with-paper" />
                        </svg>{' '}
                        Danh Mục
                    </Link>
                </li>
                <li className={pathname === '/products' ? 'active' : null}>
                    <Link to="/products">
                        <svg className="glyph stroked bag">
                            <use xlinkHref="#stroked-bag" />
                        </svg>{' '}
                        Sản phẩm
                    </Link>
                </li>
                <li className={pathname === '/order' ? 'active' : null}>
                    <Link to="/order">
                        <svg className="glyph stroked notepad ">
                            <use xlinkHref="#stroked-notepad" />
                        </svg>{' '}
                        Đơn hàng
                    </Link>
                </li>
                <li role="presentation" className="divider" />
                <li className={pathname === '/quan-tri' ? 'active' : null}>
                    <Link to="/quan-tri">
                        <svg className="glyph stroked male-user">
                            <use xlinkHref="#stroked-male-user" />
                        </svg>{' '}
                        Quản lý thành viên
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SidebarAdmin;
