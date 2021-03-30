import React from 'react';

import Header from './Header';
import './Layout.css';

function Layout({ children, title, ...props }) {
  return (
    <div className="layout">
      <Header className="layout-header bordered" {...props} />
      <main className="layout-main bordered">
        <section className="layout-content">{children}</section>
      </main>
      <footer className="layout-footer bordered">© 2021 NodePop</footer>
    </div>
  );
}

export default Layout;
