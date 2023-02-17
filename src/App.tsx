import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ConverterPage from './pages/ConverterPage';
import CurrenciesList from './pages/CurrenciesList';

import RootLayout from './pages/RootLayout';

type Props = {};

const App = (props: Props) => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <CurrenciesList />,
                },
                {
                    path: '/converter',
                    element: <ConverterPage />,
                    children: [],
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
