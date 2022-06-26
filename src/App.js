import './App.css';
import PageOne from './page/PageOne';
import { Routes, Route} from 'react-router-dom'
import PageTwo from './page/PageTwo';
import PowerBI from './page/PowerBi';
function App() {
  return (
    <div className='divApp'>
        <Routes>
          <Route path='/' element={<PageOne/>} />
          <Route path='/certification' element={<PageTwo/>} />
          <Route path='/powerbi' element={<PowerBI/>}/>
        </Routes>
    </div>
  );
}

export default App;
