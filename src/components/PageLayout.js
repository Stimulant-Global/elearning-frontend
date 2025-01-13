import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Header user={user} />
      <main>{children}</main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default PageLayout;