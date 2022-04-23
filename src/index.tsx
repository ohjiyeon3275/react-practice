import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient()

//
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// if (!root) throw new Error('Failed to find the root element');

ReactDOM.render(
<QueryClientProvider client={client}>
  <App />
</QueryClientProvider>,

document.getElementById('root') as HTMLElement

);

