import config from '~/configs';

//  Pages
import Home from '~/pages/Home';
import Info from '~/pages/Info';
import Menu from '~/pages/Menu';
import Promotion from '~/pages/Promotion';
import Service from '~/pages/Service';
import News from '~/pages/News';
import Stores from '~/pages/Stores';
import Contact from '~/pages/Contact';
import Register from '~/pages/Register';
import Payment from '~/pages/Payment';
import Management from '~/pages/Management';
import Dashboard from '~/pages/Dashboard';
import Products from '~/pages/Products';
import Order from '~/pages/Order';
import OrderDetail from '~/pages/OrderDetail';
import NotFound from '~/pages/NotFound/';
import LoginAdmin from '~/pages/LoginAdmin/';
import Blog from '~/pages/Blog/Blog';
import EditProduct from '~/pages/EditProduct/EditProduct';
import AddProduct from '~/pages/AddProduct/AddProduct';
import DetailOrder from '~/pages/DetailOrder/DetailOrder';
import Categories from '~/pages/Categories/Categories';
import EditUser from '~/pages/EditUser/EditUser';

// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.info, component: Info },
    { path: config.routes.menu, component: Menu },
    { path: config.routes.promotion, component: Promotion },
    { path: config.routes.service, component: Service },
    { path: config.routes.news, component: News },
    { path: config.routes.stores, component: Stores },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.register, component: Register },
    { path: config.routes.payment, component: Payment },
    { path: config.routes.loginAdmin, component: LoginAdmin },
    { path: config.routes.blog, component: Blog },
    { path: '*', component: NotFound },
];

// Private routes
export const privateRoutes = [
    { path: config.routes.management, component: Management },
    { path: config.routes.dashboard, component: Dashboard },
    { path: config.routes.products, component: Products },
    { path: config.routes.order, component: Order },
    { path: config.routes.orderDetail, component: OrderDetail },
    { path: config.routes.editProduct, component: EditProduct },
    { path: config.routes.addProduct, component: AddProduct },
    { path: config.routes.detailOrder, component: DetailOrder },
    { path: config.routes.categories, component: Categories },
    { path: config.routes.editUser, component: EditUser },
];
