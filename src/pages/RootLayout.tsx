import { Outlet } from 'react-router-dom';
import { MainNavigation } from '../components/MainNavigation';
import { CurrencyContextProvider } from '../store/CurrencyContext';

function RootLayout() {
    return (
        <>
            <CurrencyContextProvider>
                <MainNavigation />
                <main>
                    <Outlet />
                </main>
            </CurrencyContextProvider>
        </>
    );
}

export default RootLayout;
