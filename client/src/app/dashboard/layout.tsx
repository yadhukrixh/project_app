import Header from "@/themes/components/header/header";
import NavBar from "@/themes/components/nav-bar/nav-bar";
import './home.scss'

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <NavBar />
          <Header />
          {children}
        </>
    );
  }