import { useMemo, useState } from 'react';
import { GlobalContext } from './context/globalContext';

interface ILayoutProps {
  children: JSX.Element;
}

function Layout({ children }: ILayoutProps): JSX.Element {
  const [cleanValue, setCleanValue] = useState('Clean');

  const globalContextValues = useMemo(
    () => ({
      cleanValue,
      updateCleanValue: setCleanValue,
    }),
    [cleanValue],
  );

  return (
    <GlobalContext.Provider value={globalContextValues}>
      <div className="min-h-screen w-screen">{children}</div>
    </GlobalContext.Provider>
  );
}

export default Layout;
