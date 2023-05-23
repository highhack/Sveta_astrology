import Header from "./Header/Header";
import Footer from "./Footer";
import {FC, ReactNode} from "react";

export type LayoutProps = {
    children: ReactNode
}

const  Layout: FC<LayoutProps> = ({children}) =>  {
    return (
        <>
            {/*<Header/>*/}
            {children}
            {/*<Footer/>*/}
        </>

    )
}

export default Layout