import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Logo from './assets/nav/logo.jpg';
import profile from './assets/nav/profile.jpg';

const rightBarData = {
  image: profile,
  name: "Hawkins Maru",
  title: "Company Manager",
};

const App = () => {
  return (
    <Navbar logo={Logo} data={rightBarData} />
  );
};

export default App;