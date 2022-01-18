import 'semantic-ui-css/semantic.min.css';

import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'semantic-ui-react';

import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
