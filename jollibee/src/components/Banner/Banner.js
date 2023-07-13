import CircleBanner from '~/components/CircleBanner';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Banner({ title }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('banner-img')} src={images.banner} alt="" />
            <div className={cx('pop')}>
                <CircleBanner title={title} />
            </div>
        </div>
    );
}

export default Banner;
