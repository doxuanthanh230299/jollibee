import { useEffect, useState } from 'react';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { registerUser } from '~/services/Api';
import { useNavigate } from 'react-router-dom';
import Validator from '~/utils/Validator';

const cx = classNames.bind(styles);

function Register() {
    const [input, setInput] = useState({});
    const onChangeInput = (e) => {
        const { value, name } = e.target;
        setInput({ ...input, [name]: value });
        Validator(e.target.rules)
    };
    const navigate = useNavigate();

    const handleRegister = (input) => {
        if (input.password === input.confirmPassword) {
            registerUser({
                email: input.email,
                firstName: input.firstName,
                lastName: input.lastName,
                password: input.password,
                phoneNumber: input.phoneNumber,
                address: input.address,
                gender: input.gender,
                roleId: 1,
            }).then(({ data }) => {
                console.log(data);
                if (data.errCode) {
                    alert('Email đã tồn tại vui lòng dùng email khác');
                } else {
                    setInput({});
                    navigate('/');
                }
            });
        } else {
            alert('Mật khẩu không trùng khớp');
        }
    };

    useEffect(() => {
        document.title = 'Đăng ký tài khoản';
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Đăng ký tài khoản</div>
            <form className={cx('form-register')}>
                <div className={cx('input-register')}>
                    <input
                        placeholder="Họ"
                        name="firstName"
                        rules="required|max:9"
                        value={input.firstName}
                        onChange={onChangeInput}
                    />
                </div>
                <div className={cx('input-register')}>
                    <input placeholder="Tên" name="lastName" value={input.lastName} onChange={onChangeInput} required />
                </div>
                <div className={cx('input-register')}>
                    <input
                        placeholder="Số điện thoại"
                        name="phoneNumber"
                        value={input.phoneNumber}
                        onChange={onChangeInput}
                        required
                    />
                </div>
                <div className={cx('input-register')}>
                    <input placeholder="Email" name="email" value={input.email} onChange={onChangeInput} />
                </div>
                <div className={cx('input-register')}>
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        value={input.password}
                        onChange={onChangeInput}
                        required
                    />
                </div>
                <div className={cx('input-register')}>
                    <input
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        name="confirmPassword"
                        value={input.confirmPassword}
                        onChange={onChangeInput}
                        required
                    />
                </div>
                <div className={cx('input-register')}>
                    <input type="date" name="birth" onChange={onChangeInput} value={input.birth} required />
                </div>
                <div className={cx('input-register')}>
                    <select name="gender" onChange={onChangeInput} required>
                        <option>Chọn giới tính</option>
                        <option value="1">Nam</option>
                        <option value="0">Nữ</option>
                    </select>
                </div>
                <label for="policy" className={cx('field')}>
                    <input className={cx('checkbox')} id="policy" name="policy" type="checkbox" required />
                    Đồng ý với{' '}
                    <a href="https://jollibee.com.vn/chinh-sach-va-quy-dinh-chung">Chính sách & Điều khoản chung</a>
                </label>
                <label for="promotion" className={cx('field')}>
                    <input className={cx('checkbox')} id="promotion" name="promotion" type="checkbox" required /> Nhận
                    chương trình khuyến mãi qua email
                </label>
            </form>
            <Button type="submit" primary onClick={() => handleRegister(input)}>
                Đăng ký
            </Button>
        </div>
    );
}

export default Register;
