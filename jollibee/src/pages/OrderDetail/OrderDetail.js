import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getAllProduct, getOrderDetail } from '~/services/Api';
import ModalOrder from '../Order/ModalOrder';
import CurrentFormat from '~/utils/CurrentFormat';

const OrderDetail = (props) => {
    // console.log(props.data);
    const [orderDetail, setOrderDetail] = useState([]);
    const [products, setProducts] = useState([]);
    const [isOpenEditOrder, setIsOpenEditOrder] = useState(false);
    const [orderEdit, setOrderEdit] = useState({});
    const { id } = useParams();

    // Thanh Tien
    const Total = (productId, num) => {
        const product = products.filter((product) => product.id === productId);
        return { ...product }[0].price * num;
    };

    // Tong Tien
    let TotalBill = 0;
    orderDetail.map((item) => {
        products?.map((product) => {
            if (product.id === item.productId) {
                return (TotalBill += item.num * product.price);
            }
            return TotalBill;
        });
        return TotalBill;
    });

    
    
    useEffect(() => {
        getAllProduct().then(({ data }) => setProducts(data.products));
    }, []);
    useEffect(() => {
        getOrderDetail(id).then(({ data }) => setOrderDetail(data.orderDetailInOrder));
    }, [id]);
    return (
        <>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Mã hoá đơn</th>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orderDetail?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.orderId}</td>
                            <td>
                                {products?.map((product) => {
                                    if (product.id === item.productId) return product.name;
                                    return null;
                                })}
                            </td>
                            <td>{item.num}</td>
                            <td>
                                {products?.map((product) => {
                                    if (product.id === item.productId) return CurrentFormat(product.price);
                                    return null;
                                })}
                            </td>
                            <td>{CurrentFormat(Total(item.productId, item.num))}</td>
                            <td>Sửa</td>
                            <td>Xoá</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={4}>Tổng</td>
                        <td>{CurrentFormat(TotalBill)}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default OrderDetail;
