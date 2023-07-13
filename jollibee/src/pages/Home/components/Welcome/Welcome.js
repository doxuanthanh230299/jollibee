import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Welcome.module.scss';

const cx = classNames.bind(styles);

function Welcome() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h3 className={cx('title')}>JOLLIBEE, XIN CHÀO</h3>
                <p className={cx('description')}>
                    Chúng tôi là Jollibee Việt Nam với hơn 100 cửa hàng trên khắp cả nước, chúng tôi mong muốn đem đến
                    niềm vui ẩm thực cho mọi gia đình Việt bằng những món ăn có chất lượng tốt, hương vị tuyệt hảo, dịch
                    vụ chu đáo với một mức giá hợp lý… Hãy đến và thưởng thức nhé!
                </p>
                <Button primary to="/menu">
                    Đặt Hàng
                </Button>
            </div>
        </div>
    );
}

export default Welcome;
