import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import GoogleMapReact from 'google-map-react';

const cx = classNames.bind(styles);

function Contact() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };

    useEffect(() => {
        document.title = 'Contact Us';
    }, []);

    const handleSubmit = () => {};
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>Liện hệ jollibee</div>
            <div className={cx('container')}>
                <div className={cx('box-left')}>
                    <div className={cx('title')}>Thông tin liên hệ</div>
                    <div className={cx('address-contact')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faDrumstickBite} />
                        </div>
                        Jollibee Việt Nam
                    </div>
                    <div className={cx('address-contact')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </div>
                        1900 - 1533
                    </div>
                    <div className={cx('address-contact')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        Lầu 5 - tòa nhà SCIC, 16 Trương Định, Phường Võ Thị Sáu, Quận 3, TP.HCM
                    </div>
                    <div className={cx('title')}>Gửi tin nhắn cho chúng tôi</div>
                    <form onSubmit={handleSubmit} id="contact-form" className={cx('form-contact')}>
                        <input className={cx('name')} placeholder="Tên*" required />
                        <input className={cx('phone')} placeholder="Số điện thoại*" required />
                        <input placeholder="E-mail*" required />
                        <textarea placeholder="Tin nhắn*" required />
                        <Button type="submit" className={cx('action')} primary>
                            Gửi
                        </Button>
                    </form>
                </div>
                <div className={cx('box-right')}>
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

export default Contact;
