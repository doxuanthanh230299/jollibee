import { useEffect, useState } from 'react';
import styles from './Management.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import ModalUser from './components/ModalUser';
import { userService } from '~/services';
import ModalEditUser from './components/ModalEditUser';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Management(props) {
    const [arrUsers, setArrUsers] = useState([]);
    const [isOpenEditUser, setIsOpenEditUser] = useState(false);
    const [userEdit, setUserEdit] = useState({});

    const createNewUser = async (data) => {
        try {
            const response = await userService.createNewUserService(data);
            if (response && response.data.errCode !== 0) {
                alert(response.data.errMessage);
            } else {
                await getAllUsersFromReact();
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handleDeleteUser = async (item) => {
        const response = await userService.deleteUserService(item.id);
        if (response && response.data.errCode !== 0) {
            alert(response.data.errMessage);
        } else {
            await getAllUsersFromReact();
        }
    };

    const handleEditUser = async (user) => {
        await setUserEdit(user);
        setIsOpenEditUser(true);
    };

    const getAllUsersFromReact = async () => {
        const response = await userService.getAllUsers('ALL');
        if (response && response.data.errCode === 0) {
            setArrUsers(response.data.users);
        }
    };

    const doEditUser = async (user) => {
        try {
            let res = await userService.editUserService(user);
            if (res && res.data.errCode === 0) {
                getAllUsersFromReact();
                setIsOpenEditUser(false);
            } else {
                alert(res.data.errCode);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getAllUsersFromReact();
    }, []);
    return (
        // <div>
        //     <ModalUser createNewUser={createNewUser} />
        //     {Object.keys(userEdit).length !== 0 && (
        //         <ModalEditUser
        //             currentUser={userEdit}
        //             isOpenEditUser={isOpenEditUser}
        //             setIsOpenEditUser={setIsOpenEditUser}
        //             doEditUser={doEditUser}
        //         />
        //     )}
        //     <table>
        //         <tbody>
        //             <tr>
        //                 <th>Email</th>
        //                 <th>First name</th>
        //                 <th>Last name</th>
        //                 <th>Address</th>
        //                 <th>Action</th>
        //             </tr>
        //             {arrUsers &&
        //                 arrUsers.map((item, index) => {
        //                     return (
        //                         <tr key={index}>
        //                             <td>{item.email}</td>
        //                             <td>{item.firstName}</td>
        //                             <td>{item.lastName}</td>
        //                             <td>{item.address}</td>
        //                             <td>
        //                                 <div>
        //                                     <span onClick={() => handleEditUser(item)}>
        //                                         <FontAwesomeIcon icon={faEdit} />
        //                                     </span>
        //                                     <span onClick={() => handleDeleteUser(item)}>
        //                                         <FontAwesomeIcon icon={faDeleteLeft} />
        //                                     </span>
        //                                 </div>
        //                             </td>
        //                         </tr>
        //                     );
        //                 })}
        //         </tbody>
        //     </table>
        // </div>

        // abc
        <div>
            <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                <div className="row">
                    <ol className="breadcrumb">
                        <li>
                            <a href="#">
                                <svg className="glyph stroked home">
                                    <use xlinkHref="#stroked-home" />
                                </svg>
                            </a>
                        </li>
                        <li className="active">Danh sách thành viên</li>
                    </ol>
                </div>
                {/*/.row*/}
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Danh sách thành viên</h1>
                    </div>
                </div>
                {/*/.row*/}
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-body">
                                <div className="bootstrap-table">
                                    <div className="table-responsive">
                                        <div className="alert bg-success" role="alert">
                                            <svg className="glyph stroked checkmark">
                                                <use xlinkHref="#stroked-checkmark" />
                                            </svg>
                                            Đã thêm thành công
                                            <a href="#" className="pull-right">
                                                <span className="glyphicon glyphicon-remove" />
                                            </a>
                                        </div>
                                        <a href="adduser.html" className="btn btn-primary">
                                            Thêm Thành viên
                                        </a>
                                        <table className="table table-bordered" style={{ marginTop: 20 }}>
                                            <thead>
                                                <tr className="bg-primary">
                                                    <th>ID</th>
                                                    <th>Email</th>
                                                    <th>Full</th>
                                                    <th>Address</th>
                                                    <th>Phone</th>
                                                    <th>Level</th>
                                                    <th width="18%">Tùy chọn</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {arrUsers?.map((user, index) => (
                                                    <tr key={user.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.firstName + user.lastName}</td>
                                                        <td>{user.address}</td>
                                                        <td>{user.phoneNumber}</td>
                                                        <td>{user?.roleId === '1' ? 'Quản trị' : 'Người dùng'}</td>
                                                        <td>
                                                            <Link to={`/editUser/${user.id}`} className="btn btn-warning">
                                                                <i className="fa fa-pencil" aria-hidden="true" /> Sửa
                                                            </Link>
                                                            <a href="#" className="btn btn-danger">
                                                                <i className="fa fa-trash" aria-hidden="true" /> Xóa
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div align="right">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        Trở lại
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        3
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        tiếp theo
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                        {/*/.row*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Management);
