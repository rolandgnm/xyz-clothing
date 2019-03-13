/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';

import { CurrencyProvider } from './src/context/CurrencyContext';

export const wrapRootElement = ({ element }) => <CurrencyProvider>{element}</CurrencyProvider>;
