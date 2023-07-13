import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuStick from './components/MenuStick';
import { useEffect, useState } from 'react';
import Product from './components/Product/Product';
import CartButton from './components/CartButton';
import Cart from './components/Cart';
import { connect } from 'react-redux';
import { categoryService, productService } from '~/services';
import MediaQuery from 'react-responsive';

const cx = classNames.bind(styles);

function Menu(props) {
    const [isOpenCart, setIsOpenCart] = useState(true);
    const [arrProducts, setArrProducts] = useState([]);
    const [arrCategory, setArrCategory] = useState([]);

    // Get All Products
    const getAllProductsFromReact = async () => {
        const response = await productService.getAllProduct();
        if (response && response.data.errCode === 0) {
            setArrProducts(response.data.products);
        }
    };

    // Get All Category
    const getAllCategoryFromReact = async () => {
        const response = await categoryService.getAllCategory();
        if (response && response.data.errCode === 0) {
            setArrCategory(response.data.categories);
        }
    };

    const filterProducts = arrProducts.filter((product) => product.categoryId === props.category.categoryId);

    useEffect(() => {
        document.title = 'Thực Đơn';
        getAllCategoryFromReact();
        getAllProductsFromReact();
    }, []);

    const [isStick, setIsStick] = useState(false);
    window.addEventListener('scroll', function (e) {
        const scrolled = window.scrollY;
        if (scrolled > 130) {
            // Show menu stick
            setIsStick(true);
        } else {
            // Show menu normal
            setIsStick(false);
        }
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu')}>
                <MediaQuery minWidth={1224}>{isStick && <MenuStick arrCategory={arrCategory} />}</MediaQuery>
            </div>
            <div className={cx('products')}>
                {filterProducts.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.thumbnail}
                    />
                ))}
            </div>
            {!isOpenCart ? (
                <Cart setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart} />
            ) : (
                <CartButton setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart} />
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        category: state.category,
    };
};

export default connect(mapStateToProps)(Menu);
