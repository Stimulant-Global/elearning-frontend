import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import AppRoutes from './Routes';

function App() {
  return (
    <Router>
      <PageLayout>
        <AppRoutes />
      </PageLayout>
    </Router>
  );
}

export default App;