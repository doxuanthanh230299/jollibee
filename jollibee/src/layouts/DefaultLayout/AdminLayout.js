import SidebarAdmin from './components/SidebarAdmin';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function AdminLayout({ children }) {
    return (
        <>
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/dashboard">
                            <span>Jollibee </span>Admin
                        </Link>
                        <ul className="user-menu">
                            <li className="dropdown pull-right">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <svg className="glyph stroked male-user">
                                        <use xlinkHref="#stroked-male-user" />
                                    </svg>{' '}
                                    admin <span className="caret" />
                                </a>
                                <ul className="dropdown-menu" role="menu">
                                    <li>
                                        <a href="#">
                                            <svg className="glyph stroked male-user">
                                                <use xlinkHref="#stroked-male-user" />
                                            </svg>
                                            Thông tin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin/logout">
                                            <svg className="glyph stroked cancel">
                                                <use xlinkHref="#stroked-cancel" />
                                            </svg>{' '}
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <SidebarAdmin/>
            {children}

            {/* <Row>
                <Col lg={2} md={4} sm={4}>
                    <SidebarAdmin />
                </Col>
                <Col lg={10} md={8} sm={8}>
                    <div className="content">{children}</div>
                </Col>
            </Row> */}
        </>
    );
}

export default AdminLayout;
