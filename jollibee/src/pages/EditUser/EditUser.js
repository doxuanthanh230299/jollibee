import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser, getUser } from '~/services/Api';

const EditUser = () => {
    const [input, setInput] = useState({});
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };
    const { id } = useParams();
    const navigate = useNavigate();
    const handleSubmit = () => {
        editUser(input).then(({ data }) => {
            if (data.errCode === 0) {
                navigate('/quan-tri');
            }
        });
    };
    const Cancel = () => {
        navigate('/quan-tri')
    }
    useEffect(() => {
        getUser(id).then(({ data }) => {
            setInput(data.users);
        });
    }, [id]);
    return (
        <div className="row">
            <div className="col-xs-12 col-md-12 col-lg-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <i className="fas fa-user" /> Sửa thành viên - admin@gmail.com
                    </div>
                    <div className="panel-body">
                        <div className="row justify-content-center" style={{ marginBottom: 40 }}>
                            <div className="col-md-8 col-lg-8 col-lg-offset-2">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        readOnly
                                        name="email"
                                        className="form-control"
                                        value={input.email}
                                    />
                                    <div className="alert alert-danger" role="alert">
                                        <strong>email đã tồn tại!</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={input.password}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>First name</label>
                                    <input
                                        type="full"
                                        name="firstName"
                                        className="form-control"
                                        value={input.firstName}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last name</label>
                                    <input
                                        type="full"
                                        name="lastName"
                                        className="form-control"
                                        value={input.lastName}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        type="address"
                                        name="address"
                                        className="form-control"
                                        value={input.address}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="phone"
                                        name="phoneNumber"
                                        className="form-control"
                                        value={input.phoneNumber}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Level</label>
                                    <select
                                        name="roleId"
                                        className="form-control"
                                        value={input.roleId}
                                        onChange={handleChangeInput}
                                    >
                                        <option value={1}>Quản trị</option>
                                        <option value={2}>Thành viên</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8 col-lg-8 col-lg-offset-2 text-right">
                                    <button className="btn btn-success" type="submit" onClick={handleSubmit}>
                                        Sửa thành viên
                                    </button>
                                    <button className="btn btn-danger" type="reset" onClick={Cancel}>
                                        Huỷ bỏ
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
