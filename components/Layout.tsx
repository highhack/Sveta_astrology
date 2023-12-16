import Header from "./Header";
import Footer from "./Footer";
import { FC, ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
