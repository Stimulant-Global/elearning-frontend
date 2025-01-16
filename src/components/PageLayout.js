import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Navbar user={user} />
      <main>{children}</main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default PageLayout;