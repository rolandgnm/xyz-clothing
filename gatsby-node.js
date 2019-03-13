/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const products = require('./src/data/products.json');

exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: '/',
    component: require.resolve('./src/templates/productList.js'),
    context: {
      products,
    },
  });

  products.forEach(product => {
    createPage({
      path: `/p/${product.id}`,
      component: require.resolve('./src/templates/product.js'),
      context: {
        products,
        selectedId: product.id,
      },
    });
  });
};
