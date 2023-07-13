import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import styles from './StoreLocation.module.scss';

const cx = classNames.bind(styles);

function StoreLocation({ title }) {
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [provinceResult, setProvinceResult] = useState('Chọn tỉnh thành');
    const districts = [];
    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/')
            .then((res) => res.json())
            .then((data) => setProvince(data));
    }, []);

    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/d/')
            .then((res) => res.json())
            .then((data) => setDistrict(data));
    }, []);

    const handleChangeProvince = () => {
        setProvinceResult(document.getElementById('province').value);
    };

    district.map((item) => {
        if (item.province_code.toString() === provinceResult) {
            districts.push(item);
        }
        return districts;
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>{title}</div>
            <div className={cx('store-location')}>
                <select onChange={handleChangeProvince} className={cx('filter')} id="province">
                    <option>Chọn tỉnh thành</option>
                    {province.map((item) => {
                        return (
                            <option key={item.code} value={item.code}>
                                {item.name}
                            </option>
                        );
                    })}
                </select>
                <select className={cx('filter')} id="district">
                    <option>Chọn quận huyện</option>
                    {districts.map((item) => {
                        return (
                            <option key={item.code} value={item.code}>
                                {item.name}
                            </option>
                        );
                    })}
                </select>
                <Button className={cx('submit-btn')} to="/stores" primary>
                    Tìm Kiếm
                </Button>
            </div>
        </div>
    );
}

export default StoreLocation;
