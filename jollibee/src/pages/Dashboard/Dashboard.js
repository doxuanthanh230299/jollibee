import { faMale, faSignal, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { getOrderDataByMonth } from '~/services/Api';
import CurrentFormat from '~/utils/CurrentFormat';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [orders, setOrders] = useState([]);
    const monthsList = [
        { label: 'January', value: '1', dataset: [] },
        { label: 'February', value: '02', dataset: [] },
        { label: 'March', value: '03', dataset: [] },
        { label: 'April', value: '04', dataset: [] },
        { label: 'May', value: '05', dataset: [] },
        { label: 'June', value: '06', dataset: [] },
        { label: 'July', value: '07', dataset: [] },
        { label: 'August', value: '08', dataset: [] },
        { label: 'September', value: '09', dataset: [] },
        { label: 'October', value: '10', dataset: [] },
        { label: 'November', value: '11', dataset: [] },
        { label: 'December', value: '12', dataset: [] },
    ];
    let daysList = [];
    for (let i = 0; i < 31; i++) {
        daysList.push({ label: i + 1, value: i + 1, dataset: 0 });
    }
    for (let j = 0; j < monthsList.length; j++) {
        monthsList[j].dataset.push(...daysList);
    }
    orders?.forEach((order) => {
        const expense = order.total;
        const month = order?.createdAt?.slice(5, 7);
        const day = parseInt(order?.createdAt?.slice(8, 10));
        const monthValue = monthsList.find((m) => m.value === month);
        monthValue.dataset[day - 1].dataset += expense;
    });

    const revenueMonth = () => {
        const total = orders.reduce((total, order) => {
            return total + order.total;
        }, 0);
        return CurrentFormat(total);
    };

    let today = new Date();
    let month = today.getMonth() + 1;
    useEffect(() => {
        getOrderDataByMonth(month).then(({ data }) => {
            setOrders(data.orders);
            console.log(data.orders);
        });
    }, [month]);
    return (
        <>
            <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                <div className="row">
                    <ol className="breadcrumb">
                        <li>
                            <Link to="/dashboard">
                                <svg className="glyph stroked home">
                                    <use xlinkHref="#stroked-home" />
                                </svg>
                            </Link>
                        </li>
                        <li className="active">Tổng quan</li>
                    </ol>
                </div>
                {/*/.row*/}
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Tổng quan</h1>
                    </div>
                </div>
                {/*/.row*/}
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-9">
                        <div className="panel panel-blue panel-widget ">
                            <div className="row no-padding">
                                <div className="col-sm-3 col-lg-4 widget-left">
                                    <FontAwesomeIcon icon={faSignal} />
                                </div>
                                <div className="col-sm-9 col-lg-8 widget-right">
                                    <div className="large">{revenueMonth()}</div>
                                    <div className="text-muted">Doanh thu tháng {month}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <div className="panel panel-teal panel-widget">
                            <div className="row no-padding">
                                <div className="col-sm-3 col-lg-5 widget-left">
                                    <FontAwesomeIcon icon={faUserAlt} />
                                </div>
                                <div className="col-sm-9 col-lg-7 widget-right">
                                    <div className="large">{orders?.length}</div>
                                    <div className="text-muted">Số đơn hàng</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/.row*/}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">Biểu đồ doanh thu</div>
                            <div className="panel-body">
                                {/* <div className="canvas-wrapper">
                                    <canvas className="main-chart" id="line-chart" height={200} width={600} />
                                </div> */}
                                <ResponsiveContainer width="100%" height={400}>
                                    <BarChart data={daysList}>
                                        {/* <CartesianGrid strokeDasharray="3 3" stroke="#8884d8" /> */}
                                        <XAxis dataKey="label" stroke="red" />
                                        <YAxis dataKey="dataset" stroke="red" />
                                        <Tooltip />
                                        <Legend />
                                        {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                                        <Bar dataKey="dataset" fill="green" barSize={30} label={{ position: 'top' }} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
