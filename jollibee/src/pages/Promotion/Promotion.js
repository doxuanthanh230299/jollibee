import { useEffect } from 'react';
import promotionImages from '~/assets/img/Promotion';
import classNames from 'classnames/bind';
import styles from './Promotion.module.scss';

import BoxContent from '~/components/BoxContent';
import Banner from '~/components/Banner';

const cx = classNames.bind(styles);

const BLOGS = [
    {
        id: 1,
        img: promotionImages.blog1,
        title: 'Cặp đôi bee-up, thỏa sức ăn ngon',
        previewContent: 'Măm gà giòn tặng trà ngon',
        link: '/',
    },
    {
        id: 2,
        img: promotionImages.blog2,
        title: 'Ngon ngất ngây - no mê say',
        previewContent: '',
        link: '/',
    },
    {
        id: 3,
        img: promotionImages.blog3,
        title: 'TẢI APP LIỀN TAY -  TẶNG NGAY 01 PHẦN MÌ Ý SỐT BÒ BẰM!!!',
        previewContent: 'TẢI APP LIỀN TAY -  TẶNG NGAY 01 PHẦN MÌ Ý SỐT BÒ BẰM!!!',
        link: '/',
    },
];

function Promotion() {
    useEffect(() => {
        document.title = 'Khuyến mãi';
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Banner title="Khuyến mãi" />
            <div className={cx('page')}>
                {BLOGS.map((blog) => (
                    <BoxContent
                        key={blog.id}
                        img={blog.img}
                        title={blog.title}
                        previewContent={blog.previewContent}
                        link={blog.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Promotion;
