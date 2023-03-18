import { Component, ReactNode } from 'react';
import Header from '../Header/Header';
import './Layout.scss';

type LayoutProps = {
  title: string;
  children: ReactNode;
};

export class Layout extends Component<LayoutProps> {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <Header title={title} />
        <main className="main container">{children}</main>
        <footer>2023</footer>
      </>
    );
  }
}

export default Layout;
