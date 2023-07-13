import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/img';
import Button from '~/components/Button';
import styles from './LogInPopUp.module.scss';
import { userService } from '~/services';
import { connect } from 'react-redux';
import * as actions from '~/redux/action';
import { useCookies } from 'react-cookie';
import { login } from '~/services/Api';
// import KeyCodeUtils from '~/utils/KeyCodeUtils';

const cx = classNames.bind(styles);

function LogInPopUp(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [cookies, setCookie] = useCookies(['token']);

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrMessage('');
        // try {
        //     let data = await userService.login(email, password);
        //     if (data.data && data.data.errCode !== 0) {
        //         setErrMessage(data.data.message);
        //     }
        //     if (data.data && data.data.errCode === 0) {
        //         console.log('Login Success', props);
        //         props.userLoginSuccess({ email, password });
        //         props.togglePopup();
        //     }
        // } catch (e) {
        //     if (e.response) {
        //         if (e.response.data) {
        //             setErrMessage(e.response.data.message);
        //         }
        //     }
        //     console.log(e);
        // }
        login({ email, password }).then(({ data }) => {
            try {
                if (data && data.errCode !== 0) {
                    setErrMessage(data.message);
                }
                if (data && data.errCode === 0) {
                    props.userLoginSuccess({ email, password });
                    props.togglePopup();
                    setCookie('token', data.token, {});
                }
            } catch (e) {
                if (e.response) {
                    if (e.response) {
                        setErrMessage(e.response.message);
                    }
                }
                console.log(e);
            }
        });
    };
    // const handlerKeyDown = (e) => {
    //     const keyCode = e.which || e.keyCode;
    //     if (keyCode === KeyCodeUtils.ENTER) {
    //         e.preventDefault();
    //     }
    // };
    return (
        <div className={cx('pop-up')}>
            <form className={cx('wrapper')} onSubmit={(e) => handleLogin(e)}>
                <Button onClick={() => props.togglePopup()} className={cx('close-btn')} rounded primary>
                    X
                </Button>
                <header className={cx('header-login')}>
                    <img className={cx('logo')} src={images.logo} alt="" />
                    <span className={cx('title')}>Vui lòng đăng nhập </span>
                    <fieldset className={cx('login-form')}>
                        <input
                            className={cx('input')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Email/ Số điện thoại"
                        ></input>
                        <h1>{errMessage}</h1>
                        <input
                            className={cx('input')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Mật khẩu"
                        ></input>
                        <Link to="/forget-password" className={cx('forgot-pass')}>
                            Quên mật khẩu?
                        </Link>
                    </fieldset>
                </header>
                <footer className={cx('footer-login')}>
                    <Button className={cx('button')} id="btnLogin" primary large onClick={(e) => handleLogin(e)}>
                        Đăng nhập
                    </Button>
                    <Button
                        className={cx('button')}
                        blueBtn
                        large
                        leftIcon={<FontAwesomeIcon icon={faSquareFacebook} />}
                    >
                        Đăng nhập với facebook
                    </Button>
                    <Button className={cx('button')} whiteBtn large leftIcon={<img src={images.google} alt="google" />}>
                        Đăng nhập với google
                    </Button>
                    <div className={cx('register')}>
                        <p>Bạn chưa có tài khoản? </p>
                        <Link to="/register"> Đăng ký ngay</Link>
                    </div>
                </footer>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLoginSuccess: ({ email, password }) => dispatch(actions.userLoginSuccess({ email, password })),
    };
};

LogInPopUp.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(LogInPopUp);
