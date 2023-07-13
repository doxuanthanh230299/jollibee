import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Info.module.scss';
import imagesInfo from '~/assets/img/Info';
import images from '~/assets/img';
import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faChartLine,
    faHandshakeSimple,
    faSackDollar,
    faUser,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faFaceSmileWink, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Info() {
    useEffect(() => {
        document.title = 'About Us';
    }, []);
    return (
        <div className={cx('wrapper-info')}>
            <div className={cx('history')}>
                <div className={cx('history-logo')}>
                    <img src={imagesInfo.history} alt="bee" />
                </div>
                <div className={cx('history-content')}>
                    <div className={cx('title')}>LỊCH SỬ HÌNH THÀNH</div>
                    <div className={cx('content-1')}>
                        Jollibee là một câu chuyện thành công phi thường bởi chỉ từ 2 tiệm kem nhỏ hình thành vào năm
                        1975, chuyên bán các món ăn nóng và bánh mì kẹp đã trở thành công ty với 7 cửa hàng vào năm
                        1978, chuyên về bơ gơ. Sau đó trở thành một tập đoàn tạo nên cuộc cách mạng thức ăn nhanh tại
                        Philippines.
                    </div>
                    <div className={cx('content-2')}>
                        Jollibee hiện có hơn 1000 cửa hàng tại Philippines và hơn 300 cửa hàng tại các quốc gia trên
                        khắp thế giới như Mỹ, Hong Kong, các tiểu vương quốc Ả Rập Thống Nhất, Qatar, Brunei, Trung
                        Quốc, và Việt Nam.
                    </div>
                </div>
            </div>
            <div className={cx('slider-about flex')}>
                <div className={cx('slider block w-9/12')}>
                    <Slide arrows={false} autoplay={false} slidesToScroll={1} slidesToShow={3}>
                        <div>
                            <img className={cx('slide-image')} src={imagesInfo.block1} alt="" />
                        </div>
                        <div>
                            <img className={cx('slide-image')} src={imagesInfo.block2} alt="" />
                        </div>
                        <div>
                            <img className={cx('slide-image')} src={imagesInfo.block3} alt="" />
                        </div>
                        <div>
                            <img className={cx('slide-image')} src={imagesInfo.block4} alt="" />
                        </div>
                        <div>
                            <img className={cx('slide-image')} src={imagesInfo.block5} alt="" />
                        </div>
                    </Slide>
                </div>
                <div className={cx('social')}>
                    <a className={cx('social-btn')} href="https://www.facebook.com/JollibeeVietnam">
                        <img src={images.iconFb} alt="" />
                    </a>
                    <a className={cx('social-btn')} href="mailto:jbvnfeedback@jollibee.com.vn">
                        <img src={images.iconMail} alt="" />
                    </a>
                </div>
            </div>
            <div className={cx('flex-box-content-2')}>
                <div className={cx('title')}>JOLLIBEE VIỆT NAM</div>
                <div className={cx('info-content')}>
                    Cửa hàng Jollibee đầu tiên được mở tại Việt Nam vào năm 2005. Kể từ đó, Jollibee đã nỗ lực hết mình
                    để mang đến các gia đình Việt những phần ăn ngon miệng với mức giá hợp lý.
                </div>
                <div className={cx('info-content')}>
                    Đến hôm nay, Jollibee đã có hơn 100 cửa hàng tại Việt Nam trải rộng trên toàn quốc. Jollibee không
                    đơn thuần phục vụ những món thức ăn nhanh chất lượng theo quy trình được kiểm duyệt nghiêm khắc, mà
                    còn mang đến cho mọi người không gian ấm áp, sang trọng để ai cũng được thưởng thức ẩm thực vui vẻ,
                    thoải mái nhất bên gia đình và bè bạn. Từ những nền tảng này, Jollibee Việt Nam luôn ấp ủ trở thành
                    thương hiệu thức ăn nhanh mang đến những món ăn ngon với hương vị phù hợp cho người Việt bên cạnh
                    mục tiêu tạo ra một địa điểm ẩm thực góp phần gắn kết gia đình Việt qua bữa ăn ngon. Và đây cũng
                    chính là tiền đề để Jollibee củng cố và phát triển bền vững trong dài hạn.
                </div>
            </div>
            <div className={cx('achievement')}>
                <img className={cx('bg-info-img')} src={imagesInfo.bgImage} alt="" />
                <div className={cx('content-box')}>
                    <div className={cx('title-achievement')}>CÁC GIÁ TRỊ</div>
                    <div className="flex-box-icon-au">
                        <div className={cx('icon-group')}>
                            <div className={cx('icon-item')}>
                                <FontAwesomeIcon className={cx('icon-achievement')} icon={faUser} />
                                <div className={cx('icon-text')}>Khách hàng là trọng tâm</div>
                            </div>

                            <div className={cx('icon-item')}>
                                <FontAwesomeIcon className={cx('icon-achievement')} icon={faChartLine} />
                                <div className={cx('icon-text')}>Mang đến các giá trị vượt trội</div>
                            </div>

                            <div className={cx('icon-item')}>
                                <FontAwesomeIcon className={cx('icon-achievement')} icon={faHandshakeSimple} />
                                <div className={cx('icon-text')}>Luôn đề cao sự tôn trọng đối với các cá nhân</div>
                            </div>
                        </div>
                        <div className={cx('icon-group')}>
                            <div className={cx('icon-item')}>
                                <FontAwesomeIcon className={cx('icon-achievement')} icon={faUsers} />
                                <div className={cx('icon-text')}>Tinh thần tập thể</div>
                            </div>

                            <div className={cx('icon-item')}>
                                <FontAwesomeIcon className={cx('icon-achievement')} icon={faFaceSmileWink} />

                                <div className={cx('icon-text')}>Mang tinh thần của gia đình và luôn luôn vui vẻ</div>
                            </div>

                            <div className={cx('icon-item')}>
                                <FontAwesomeIcon className={cx('icon-achievement')} icon={faBook} />
                                <div className={cx('icon-text')}>Khiêm tốn lắng nghe và học hỏi</div>
                            </div>
                        </div>
                        <div className={cx('icon-group')}>
                            <div className={cx('icon-item')}>
                                <FontAwesomeIcon className={cx('icon-achievement')} icon={faThumbsUp} />
                                <div className={cx('icon-text')}>Trung thực và liêm chính</div>
                            </div>

                            <div className={cx('icon-item')}>
                                <FontAwesomeIcon className={cx('icon-achievement')} icon={faSackDollar} />
                                <div className={cx('icon-text')}>Tiết kiệm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('content-bottom')}>
                    <div className={cx('right-box-content-bottom-au')}>
                        <img className={cx('bottom-image')} src={imagesInfo.bottomImage} alt="" />
                    </div>
                    <div className={cx('left-box-content-bottom-auv')}>
                        <div className={cx('title')}>SỨ MỆNH</div>
                        <div>
                            Tất cả những gì mà chúng tôi phải làm là mang đến những hương vị tuyệt vời trong từng món
                            ăn, mang lại niềm vui ẩm thực cho tất cả mọi người.
                        </div>
                        <div className={cx('title')}>CÁC TIÊU CHUẨN FSC</div>
                        <div>
                            Sự phát triển vượt bậc của Jollibee™ có được là nhờ vào việc tuân thủ một cách nghiêm ngặt
                            và tận tâm vào các tiêu chuẩn cao được ký kiệu là “F.S.C”: Thực phẩm (Food) được phục vụ cho
                            công chúng phải đáp ứng được các tiêu chuẩn vượt trội của công ty nếu không chúng tôi sẽ
                            không đưa ra thị trường. Dịch vụ (Service) phải nhanh chóng và lịch sự. Sạch sẽ (Cleanness),
                            từ nhà bếp đến các dụng cụ phải luôn luôn được giữ sạch. Jollibee thực sự tự hào về những
                            nhân viên của mình, những người luôn tận tụy với công việc của họ.
                        </div>
                        <div>
                            Jollibee luôn công nhận họ bằng việc mang đến những chế độ ưu đãi tốt nhất trong ngành công
                            nghiệp thức ăn nhanh và hỗ trợ họ trong những chương trình đào tạo toàn diện và hiện đại.
                            Những nhà quản lý được phổ biến thường xuyên trên những hệ thống vận hành mới nhất ở cửa
                            hàng về kỹ năng quản lý con người theo định hướng riêng so với những người khác. Những nhóm
                            dịch vụ được đào tạo ở những cửa hàng khác nhau và dịch vụ thực phẩm luôn được đổi mới.
                            Jollibee cũng cung cấp những cơ hội nghề nghiệp cho những nhóm thành viên có chất lượng và
                            có trình độ để họ có thể thăng tiến lên cấp quản lý trong ngành dịch vụ thực phẩm.
                        </div>
                        <div className={cx('content-4')}>
                            Các hoạt động tại cửa hàng được hỗ trợ đắc lực bởi các chuyên gia có kinh nghiệm trong lĩnh
                            vực Marketing, Kỹ thuật và Quản lý Công nghệ thông tin.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
