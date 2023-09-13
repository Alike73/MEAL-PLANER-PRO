
import { useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Loader from './Components/Loader/Loader';

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      { loading 
          ? (<Loader />) 
          : (
              <>
                <ScrollToTop />
                <Main />
              </>
            )
        }
      
    </div>
  );
}

export default App;
