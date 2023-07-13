import { useState } from 'react';
import SidebarMenu from '~/components/SidebarMenu';
import Header from './components/Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
    const [isOpenSideBar, setIsOpenSideBar] = useState(false);
    return (
        <div>
            <Header isOpenSideBar={isOpenSideBar} setIsOpenSideBar={setIsOpenSideBar} />
            <SidebarMenu isOpenSideBar={isOpenSideBar} setIsOpenSideBar={setIsOpenSideBar} />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
