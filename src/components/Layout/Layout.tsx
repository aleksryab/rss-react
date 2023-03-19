import { Component, ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import './Layout.scss';

type LayoutProps = {
  title: string;
  children: ReactNode;
};

export class Layout extends Component<LayoutProps> {
  componentDidMount(): void {
    document.title = `React Components - ${this.props.title}`;
  }

  render() {
    const { title, children } = this.props;
    return (
      <>
        <Header title={title} />
        <main className="main container">{children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
