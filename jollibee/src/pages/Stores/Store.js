import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Stores.module.scss';
import StoreLocation from '../Home/components/StoreLocation';
import storeImages from '~/assets/img/Stores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import GoogleMapReact from 'google-map-react';

const cx = classNames.bind(styles);

function Store() {
    useEffect(() => {
        document.title = 'Store Locator';
    }, []);

    const [storeLocation, setStoreLocation] = useState([]);
    const [storeName, setStoreName] = useState('Vincom Phạm Ngọc Thạch');
    const [storeAddress, setStoreAddress] = useState('2 Pham Ngoc Thach, Trung Tự Ward, Dong Da District, Ha Noi City');
    const [storePhone, setStorePhone] = useState('024) 2346-6333');
    const [storeTime, setStoreTime] = useState('10:00 AM - 8:00 PM ');

    useEffect(() => {
        fetch('http://localhost:8000/stores')
            .then((res) => res.json())
            .then((data) => setStoreLocation(data));
    }, []);

    const handleLocation = (item) => {
        setStoreName(item.name);
        setStoreAddress(item.address);
        setStorePhone(item.phone);
        setStoreTime(item.weekday_opening_hours);
    };
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('side-bar-top')}>
                <div className={cx('header')}>
                    <StoreLocation title="Hệ thống cửa hàng jollibee" />
                </div>
                <div className={cx('loc-details')}>
                    <div className={cx('loc-name')}>{storeName}</div>
                    <div className={cx('loc-content')}>
                        <div className={cx('loc-addr')}>{storeAddress}</div>
                        <div className={cx('loc-phone')}>{storePhone}</div>
                        <div className={cx('loc-hours')}>{storeTime} (Thứ 2 - Chủ Nhật)</div>
                    </div>
                </div>
            </div>
            <div className={cx('side-bar-bottom')}>
                <div className={cx('store-location')}>
                    <img className={cx('store-img')} src={storeImages.storeBg} alt="" />
                    <ul className={cx('list')}>
                        {storeLocation.map((item) => (
                            <li
                                onClick={() => {
                                    handleLocation(item);
                                }}
                                key={item.stores_id}
                                className={cx('list-details')}
                            >
                                <div className={cx('loc-name')}>{item.name}</div>
                                <div className={cx('list-content')}>
                                    <div className={cx('loc-addr')}>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faMapLocationDot} />
                                        </div>
                                        {item.address}
                                    </div>
                                    <div className={cx('loc-phone')}>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        {item.phone}
                                    </div>
                                    <div className={cx('loc-hours')}>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faClockFour} />
                                        </div>
                                        {item.weekday_opening_hours} (Thứ 2 - Chủ Nhật)
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('map')}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: '' }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    );
}

export default Store;
