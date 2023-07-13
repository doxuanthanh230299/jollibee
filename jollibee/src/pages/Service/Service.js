import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Service.module.scss';
import Banner from '~/components/Banner';
import serviceImages from '~/assets/img/Service';
import ServiceEntry from './components/ServiceEntry';

const cx = classNames.bind(styles);

const SERVICES = [
    {
        id: '1',
        title: '1900 - 1533',
        description: '',
        img: serviceImages.entry1,
        link: '/',
    },
    {
        id: '2',
        title: 'ĐẶT TIỆC SINH NHẬT',
        description:
            'Bạn đang tìm ý tưởng cho một buổi tiệc sinh nhật thật đặc biệt dành cho con của bạn? Hãy chọn những bữa tiệc của Jollibee. Sẽ có nhiều điều vui nhộn và rất đáng nhớ dành cho con của bạn.',
        img: serviceImages.entry2,
        link: '/',
    },
    {
        id: '3',
        title: 'JOLLIBEE KID CLUB',
        description:
            'Hãy để con bạn thoả thích thể hiện và khám phá tài năng bên trong của mình cùng cơ hội gặp gỡ những bạn đồng lứa khác tại Jollibee Kids Club. Cùng tìm hiểu thêm thông tin về Jollibee Kids Club và tham gia ngay.',
        img: serviceImages.entry3,
        link: '/',
    },
    {
        id: '4',
        title: 'ĐƠN HÀNG LỚN',
        description:
            'Để phục vụ sở thích quây quần cùng gia đình và bạn bè, chương trình chiết khấu hấp dẫn dành cho những đơn hàng lớn đã ra đời để đem đến những lựa chọn tiện lợi hơn cho bạn. Liên hệ ngay với cửa hàng gần nhất để được phục vụ.',
        img: serviceImages.entry4,
        link: '/',
    },
];

function Service() {
    useEffect(() => {
        document.title = 'Service';
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Banner title="Dịch vụ" />
            <div className={cx('service-entry')}>
                {SERVICES.map((item) => (
                    <ServiceEntry
                        key={item.id}
                        title={item.title}
                        img={item.img}
                        description={item.description}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Service;
