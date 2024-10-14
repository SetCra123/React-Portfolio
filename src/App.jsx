import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import NET from 'vanta/src/vanta.net';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    NET({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xa78721,
      backgroundColor: 0xf0e11
    })
  }, [])
  


  return (
    <><div className="app">
      <div className="bg" id="vanta">
      <Nav />
        <main className="mx-3">
          <Outlet />
        </main>

      </div>
    </div><>
        
      </></>
  );
}

export default App;