/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';

import { CurrencyProvider } from './src/context/CurrencyContext';

export const wrapRootElement = ({ element }) => <CurrencyProvider>{element}</CurrencyProvider>;
