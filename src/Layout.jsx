import Navigation from "./component/navigation";
import Footer from "./component/layout/footer";
import Header from "./component/layout/header";

import { Outlet } from "react-router-dom";

function Layout() {

  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
