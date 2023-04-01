import { ReactNode, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import './Layout.scss';

type LayoutProps = {
  title: string;
  children: ReactNode;
};

function Layout({ title, children }: LayoutProps) {
  useEffect(() => {
    document.title = `React - ${title}`;
  }, [title]);

  return (
    <>
      <Header title={title} />
      <main className="main container">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
