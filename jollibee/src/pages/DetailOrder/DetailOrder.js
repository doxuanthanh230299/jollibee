import { faLocationArrow, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProduct, getOrder, getOrderDetail } from '~/services/Api';
import CurrentFormat from '~/utils/CurrentFormat';
import setImage from '~/utils/setImage';

const DetailOrder = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const [order, setOrder] = useState({});
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getOrderDetail(id).then(({ data }) => {
            setOrderDetails(data.orderDetailInOrder);
        });
        getOrder(id).then(({ data }) => {
            setOrder(data.order);
        });
        getAllProduct('ALL').then(({ data }) => {
            setProducts(data.products);
        });
    }, [id]);
    return (
        <div>
            {/*main*/}
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
                        <li className="active">Đơn hàng / Chi tiết đặt hàng</li>
                    </ol>
                </div>
                {/*/.row*/}
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">Chi tiết đặt hàng</div>
                            <div className="panel-body">
                                <div className="bootstrap-table">
                                    <div className="table-responsive">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="panel panel-blue">
                                                        <div className="panel-heading dark-overlay">
                                                            Thông tin khách hàng
                                                        </div>
                                                        <div className="panel-body">
                                                            <strong>
                                                                <FontAwesomeIcon icon={faUser} /> : {order?.fullName}
                                                            </strong>{' '}
                                                            <br />
                                                            <strong>
                                                                <FontAwesomeIcon icon={faPhone}/>{' '}
                                                                : {order?.phoneNumber}
                                                            </strong>
                                                            <br />
                                                            <strong>
                                                                <FontAwesomeIcon icon={faLocationArrow}/>{' '}
                                                                : {order?.address}
                                                            </strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <table className="table table-bordered" style={{ marginTop: 20 }}>
                                            <thead>
                                                <tr className="bg-primary">
                                                    <th>ID</th>
                                                    <th>Thông tin Sản phẩm</th>
                                                    <th>Giá sản phẩm</th>
                                                    <th>Thành tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orderDetails.map((orderDetail) => (
                                                    <tr key={orderDetail.id}>
                                                        <td>1</td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <img
                                                                        width="100px"
                                                                        src={setImage(
                                                                            products?.filter(
                                                                                (product) =>
                                                                                    product?.id ===
                                                                                    orderDetail.productId,
                                                                            )[0]?.thumbnail,
                                                                        )}
                                                                        alt=""
                                                                        className="thumbnail"
                                                                    />
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <p>
                                                                        <b>Tên Món</b>:{' '}
                                                                        {
                                                                            products?.filter(
                                                                                (product) =>
                                                                                    product?.id ===
                                                                                    orderDetail.productId,
                                                                            )[0]?.name
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        <b>Số lương</b> : {orderDetail.num}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {CurrentFormat(
                                                                products?.filter(
                                                                    (product) => product?.id === orderDetail.productId,
                                                                )[0]?.price,
                                                            )}
                                                        </td>
                                                        <td>
                                                            {CurrentFormat(
                                                                products?.filter(
                                                                    (product) => product?.id === orderDetail.productId,
                                                                )[0]?.price * orderDetail.num,
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th width="70%">
                                                        <h4 align="right">Tổng Tiền :</h4>
                                                    </th>
                                                    <th>
                                                        <h4 align="right" style={{ color: 'brown' }}>
                                                            {CurrentFormat(order.total)}
                                                        </h4>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                        <div className="alert alert-primary" role="alert" align="right">
                                            <a name id className="btn btn-success" href="#" role="button">
                                                Đã xử lý
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*/.row*/}
            </div>
        </div>
    );
};

export default DetailOrder;
