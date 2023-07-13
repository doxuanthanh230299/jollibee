import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import classNames from 'classnames/bind';
import styles from './Franchise.module.scss';
import newsImages from '~/assets/img/News';
import Button from '~/components/Button';
import BoxContent from '~/components/BoxContent';

const cx = classNames.bind(styles);

function Franchise() {
    return (
        <Tabs className={cx('wrapper')} selectedTabClassName={cx('bg')}>
            <TabList className={cx('tab-list')}>
                <Tab className={cx('title')}>Thông tin nhượng quyền</Tab>
                <Tab className={cx('title')}>Tin tức nhượng quyền</Tab>
                <Tab className={cx('title')}>Đăng ký nhượng quyền</Tab>
            </TabList>

            <TabPanel>
                <div className={cx('tab-panel')}>
                    <div className={cx('franchise-left')}>
                        <img src={newsImages.franchiseLeft} alt="" />
                    </div>
                    <div className={cx('franchise-right')}>
                        <p className={cx('content')}>
                            Hiện tại tập đoàn Jollibee - Phillipines là tập đoàn kinh doanh thức ăn nhanh lớn nhất tại
                            khu vực Châu Á với hơn 30 năm kinh nghiệm – sở hữu 12 thương hiệu với gần 3000 cửa hàng trên
                            toàn cầu, trong đó chỉ tính riêng số lượng cửa hàng Jollibee đã lên đến hơn 900 cửa hàng
                            trên toàn cầu.
                        </p>
                        <p className={cx('content')}>
                            Hiện nay hệ thống cửa hàng thức ăn nhanh Jollibee đã có hơn 80 cửa hàng trải dài hầu hết các
                            tỉnh thành tại Việt Nam như: Hà Nội, Ninh Bình, Hạ Long, Hải Phòng, Đà Nẵng, Tp.Hồ Chí Minh,
                            Cần Thơ, Nha Trang, Vũng Tàu, Bình Dương, Biên Hòa, Rạch Giá, Long Xuyên, Mỹ Tho, Cà Mau…
                        </p>
                        <p className={cx('content')}>
                            Với hệ thống quản lý chuyên nghiệp, phục vụ ân cần, món ăn ngon, giá cả hợp lý, chúng tôi vô
                            cùng vui mừng và tự hào giới thiệu đến quý vị mô hình kinh doanh nhượng quyền độc đáo và hấp
                            dẫn. Hiện nay, chúng tôi đang tìm kiếm đối tác Nhượng quyền thương hiệu quan tâm đến kinh
                            doanh hệ thống nhà hàng tiêu chuẩn quốc tế.
                        </p>
                        <p className={cx('content')}>
                            Các đối tác đầu tư quan tâm xin vui lòng liên hệ qua số tổng đài 1900-1533 để được tư vấn và
                            hỗ trợ chi tiết hơn.
                        </p>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className={cx('tab-panel')}>
                    <div className={cx('franchise-left')}>
                        <img src={newsImages.franchiseLeft} alt="" />
                    </div>
                    <div className={cx('franchise-right-posts')}>
                        <BoxContent
                            img={newsImages.franchiseContentImg}
                            title="Cơ hội nhượng quyền"
                            previewContent="Trong suốt những năm qua, Jollibee luôn hướng tới việc xây dựng và phát triển hình ảnh một tập đoàn luôn làm hài lòng khách hàng."
                            link="/"
                        />
                        <BoxContent
                            img={newsImages.franchiseContentImg}
                            title="nhượng quyền thương hiệu Jollibee"
                            previewContent="Hiện nay, chúng tôi đang tìm kiếm đối tác Nhượng quyền thương hiệu quan tâm đến kinh doanh hệ thống nhà hàng tiêu chuẩn quốc tế"
                            link="/"
                        />
                        <BoxContent
                            img={newsImages.franchiseContentImg}
                            title="Tập đoàn Jollibee"
                            previewContent="Hiện nay, Jollibee Việt Nam đang tìm kiếm đối tác Nhượng quyền thương hiệu quan tâm đến kinh doanh hệ thống nhà hàng tiêu chuẩn quốc tế, có niềm đam mê và kinh nghiệm về kinh doanh nhà hàng cao cấp, khả năng tài chính"
                            link="/"
                        />
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className={cx('tab-panel')}>
                    <div className={cx('franchise-left')}>
                        <img src={newsImages.franchiseLeft} alt="" />
                    </div>
                    <div className={cx('franchise-right')}>
                        <p className={cx('content')}>
                            Để đăng ký Nhượng quyền, quý Ông/Bà tải mẫu bên dưới, điền đầy đủ các thông tin và gửi về
                            địa chỉ email: nhuongquyen.vietnam@jollibee.com.vn
                        </p>
                        <p className={cx('content')}>Bấm để tải mẫu đăng ký Nhượng quyền:</p>
                        <Button primary>Tải mẫu đăng ký</Button>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    );
}

export default Franchise;
