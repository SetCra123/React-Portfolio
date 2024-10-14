import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import NET from 'vanta/src/vanta.net';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    NET({
      el: '#vanta'
    })
  }, [])
  


  return (
    <><div className="app">
      <div className="bg" id="vanta"></div>
    </div><>
        <Nav />
        <main className="mx-3">
          <Outlet />
        </main>
      </></>
  );
}

export default App;