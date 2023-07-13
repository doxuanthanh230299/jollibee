import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBlog } from '~/services/Api';

const cx = classNames.bind(styles);

const Blog = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();
    useEffect(() => {
        getBlog(id).then(({ data }) => {
            setBlog(data.blog);
        });
    }, [id]);
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <h1 className={cx('title')}>{blog?.title}</h1>
                </div>
                <div className={cx('main-content')}><p>{blog?.post}</p></div>
            </div>
        </>
    );
};

export default Blog;
