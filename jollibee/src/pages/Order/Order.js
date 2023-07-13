import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { orderService } from '~/services';
import { deleteOrder, editOrder, editOrderDetail } from '~/services/Api';
import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import ModalOrder from './ModalOrder';
import OrderDetail from '../OrderDetail/OrderDetail';
import moment from 'moment';
import 'moment/locale/vi';

const cx = classNames.bind(styles);

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [deletedItem, setDeletedItem] = useState(true);
    const [orderEdit, setOrderEdit] = useState({});

    const getAllOrderFromReact = async () => {
        const response = await orderService.getAllOrder();
        if (response && response.data.errCode === 0) {
            setOrders(response.data.orders);
        }
    };

    const handleDeleted = (item) => {
        item.deleted = 1;
        deleteOrder(item);
        setDeletedItem(!deletedItem);
    };

    const handleEditOrder = async (data) => {
        await setOrderEdit(data);
    };

    useEffect(() => {
        getAllOrderFromReact();
    }, [deletedItem]);
    return (
        <>
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
                        <li className="active">Đơn hàng</li>
                    </ol>
                </div>
                {/*/.row*/}
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">Danh sách đơn đặt hàng chưa xử lý</div>
                            <div className="panel-body">
                                <div className="bootstrap-table">
                                    <div className="table-responsive">
                                        <a href="processed.html" className="btn btn-success">
                                            Đơn đã xử lý
                                        </a>
                                        <table className="table table-bordered" style={{ marginTop: 20 }}>
                                            <thead>
                                                <tr className="bg-primary">
                                                    <th>ID</th>
                                                    <th>Tên khách hàng</th>
                                                    <th>Sđt</th>
                                                    <th>Địa chỉ</th>
                                                    <th>Xử lý</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map((order, index) => (
                                                    <tr key={order.id}>
                                                        <td>{index+1}</td>
                                                        <td>{order.fullName}</td>
                                                        <td>{order.phoneNumber}</td>
                                                        <td>{order.address}</td>
                                                        <td>
                                                            <Link to={`/detailOrder/${order.id}`} className="btn btn-warning">
                                                                <i className="fa fa-pencil" aria-hidden="true" />
                                                                {order.orderStatus ? 'Xử Lý' : 'Chưa Xử Lý'}
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*/.row*/}
            </div>
        </>
    );
};

export default Order;
