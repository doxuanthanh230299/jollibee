import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import menuListImages from '~/assets/img/MenuList';
import styles from './ProductsMenu.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Combo bán chạy',
        img: menuListImages.combo,
        link: '/menu',
    },
    {
        title: 'Gà giòn vui vẻ',
        img: menuListImages.garonvuive,
        link: '/menu',
    },
    {
        title: 'Mỳ ý sốt bò bằm',
        img: menuListImages.myy,
        link: '/menu',
    },
    {
        title: 'Gà sốt cay',
        img: menuListImages.gasotcay,
        link: '/menu',
    },
    {
        title: 'Burger',
        img: menuListImages.burger,
        link: '/menu',
    },
    {
        title: 'Phần ăn phụ',
        img: menuListImages.phananphu,
        link: '/menu',
    },
    {
        title: 'Món tráng miệng',
        img: menuListImages.trangmieng,
        link: '/menu',
    },
    {
        title: 'Thức uống',
        img: menuListImages.thucuong,
        link: '/menu',
    },
];

function ProductsMenu({ isOpenSideBar, setIsOpenSideBar }) {
    return (
        <ul className={cx('wrapper')}>
            {MENU_ITEMS.map((item, index) => (
                <li className={cx('category-item')} key={index}>
                    <Link className={cx('item-link')} to={item.link} onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ProductsMenu;
