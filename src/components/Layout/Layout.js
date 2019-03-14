import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../xyz/Header';
import { Container } from '../Container';
import 'semantic-ui-css/semantic.min.css';
import { ResetStyle } from '../Reset';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <ResetStyle />

        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <Container>{children}</Container>
      </>
    )}
  />
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
