import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import BannerSlide from './components/BannerSlide';
import MenuList from './components/MenuList';
import Service from './components/Service';
import Welcome from './components/Welcome';
import StoreLocation from './components/StoreLocation';

const cx = classNames.bind(styles);

function Home() {
    useEffect(() => {
        document.title = 'Home Page';
    }, []);

    return (
        <div className={cx('wrapper')}>
            <BannerSlide />
            <MenuList />
            <Service />
            <Welcome />
            <div className={cx('store-location')}>
                <StoreLocation title="Tìm cửa hàng" />
            </div>
        </div>
    );
}

export default Home;
