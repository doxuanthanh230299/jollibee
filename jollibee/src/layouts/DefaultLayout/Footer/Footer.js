import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/img';
import Button from '~/components/Button';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('footer-container')}>
                <div className={cx('section-1')}>
                    <div className={cx('footer-logo')}>
                        <img src={images.logoFooter} alt="logo" />
                    </div>
                    <div className={cx('info-address')}>
                        <p>CÔNG TY TNHH JOLLIBEE VIỆT NAM</p>
                        <p>
                            Địa chỉ: Lầu 5, tòa nhà SCIC, 16 Trương Định, Phường Võ Thị Sáu, Quận 3, Tp. Hồ Chí Minh,
                            Việt Nam
                        </p>
                        <p>Điện thoại: (028) 39309168</p>
                        <p>
                            Tổng đài: <a href="tel:19001533">1900-1533</a>
                        </p>
                        <p>Mã số thuế: 0303883266</p>
                        <p>Ngày cấp: 15/07/2008 – Nơi cấp: Cục Thuế Hồ Chí Minh</p>
                        <p>
                            Hộp thư góp ý:{' '}
                            <a href="mailto:jbvnfeedback@jollibee.com.vn">jbvnfeedback@jollibee.com.vn</a>
                        </p>
                        <p>
                            Gửi phản hồi đến cửa hàng tại{' '}
                            <strong>
                                <a href="https://jfcgrp.service-now.com/csm?id=landing_page_store_fb&amp;type=feedback&amp;country=Vietnam&amp;brand=Jollibee">
                                    ĐÂY
                                </a>
                            </strong>
                        </p>
                        <p>
                            Gửi phản hồi đến Trụ sở chính Jollibee Việt Nam tại{' '}
                            <strong>
                                <a href="https://jfcgrp.service-now.com/csm?id=landing_page_general_fb&amp;type=feedback&amp;country=Vietnam&amp;brand=Jollibee">
                                    ĐÂY
                                </a>
                            </strong>
                        </p>
                    </div>
                </div>
                <div className={cx('section-2')}>
                    <Link to="/delivery">
                        <img className={cx('delivery-logo')} src={images.deliveryBottom} alt="Delivery Logo" />
                    </Link>
                    <ul className={cx('list-page')}>
                        <li>
                            <Link to="/contact">Liên hệ</Link>
                        </li>
                        <li>
                            <a href="/chinh-sach-va-quy-dinh-chung">Chính sách và quy định chung</a>
                        </li>
                        <li>
                            <a href="/chinh-sach-thanh-toan-khi-dat-hang">Chính sách thanh toán khi đặt hàng</a>
                        </li>
                        <li>
                            <a href="/chinh-sach-hoat-dong">Chính sách hoạt động</a>
                        </li>
                        <li>
                            <a href="/chinh-sach-bao-mat">Chính sách bảo mật thông tin</a>
                        </li>
                        <li>
                            <a href="/thong-tin-van-chuyen-va-giao-nhan">Thông tin vận chuyển và giao nhận</a>
                        </li>
                        <li>
                            <a href="/thong-tin-dang-ky-giao-dich-chung">Thông tin đăng ký giao dịch chung</a>
                        </li>
                        <li>
                            <a href="/huong-dan-dat-phan-an">Hướng dẫn đặt phần ăn</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('section-3')}>
                    <p className={cx('title')}>Hãy kết nối với chúng tôi</p>
                    <div className={cx('facebook-btn')}>
                        <Button
                            href="http://www.facebook.com/JollibeeVietnam"
                            primary
                            leftIcon={<img src={images.iconFb} alt="" />}
                        >
                            <span>Facebook</span>
                        </Button>
                    </div>
                    <div className={cx('email-btn')}>
                        <Button
                            href="mailto:jbvnfeedback@jollibee.com.vn"
                            primary
                            leftIcon={<img src={images.iconMail} alt="" />}
                        >
                            <span>E-Mail</span>
                        </Button>
                    </div>
                    <div className={cx('logo-bocongthuong')}>
                        <img src={images.bocongthuong} alt="Bộ Công Thương" />
                    </div>
                </div>
            </div>
            <div className={cx('coppyright')}>© 2020 Jollibee Viet Nam</div>
        </footer>
    );
}

export default Footer;
