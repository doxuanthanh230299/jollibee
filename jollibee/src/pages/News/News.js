import { useEffect, useState } from 'react';
import newsImages from '~/assets/img/News';
import Banner from '~/components/Banner';
import BoxContent from '~/components/BoxContent';
import classNames from 'classnames/bind';
import style from './News.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { HexagonIcon } from '~/assets/Icons';
import Franchise from './components/Franchise';
import { getAllBlog } from '~/services/Api';

const cx = classNames.bind(style);

function News() {
    const [showPost, setShowPost] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const handleShowPost = () => {
        setShowPost(true);
    };

    useEffect(() => {
        document.title = 'Tin tức';
        getAllBlog('ALL').then(({data}) => {
            setBlogs(data.blogs);
        })
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Banner title="Tin Tức" />
            <div className={cx('post', showPost && 'show')}>
                {blogs?.map((item) => (
                    <BoxContent
                        key={item.id}
                        img = {`${process.env.REACT_APP_BACKEND_URL}/${item.image}`}
                        title={item.title}
                        previewContent={item.post}
                        link={`/blog/${item.id}`}
                    />
                ))}
            </div>
            <div className={cx('view-more', showPost && 'hidden')}>
                <Button
                    onClick={handleShowPost}
                    primary
                    rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
                    className={cx('more-btn')}
                >
                    Xem thêm
                </Button>
            </div>
            <div className={cx('franchise')}>
                <div className={cx('top-content')}>
                    <img className={cx('franchise-img')} src={newsImages.franchiseBg} alt="" />
                    <div className={cx('pop')}>
                        <div className={cx('title-franchise')}>Nhượng Quyền</div>
                        <div className={cx('hexagon')}>
                            <HexagonIcon />
                        </div>
                        <p className={cx('description-franchise')}>
                            CHẤT LƯỢNG TẠO NỀN TẢNG VỮNG CHẮC CHO NIỀM TIN NHÀ ĐẦU TƯ
                        </p>
                    </div>
                </div>
                <div className={cx('bottom-content')}>
                    <div className={cx('wrapper-franchise')}>
                        <Franchise />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
