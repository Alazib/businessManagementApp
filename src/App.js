import { Route, Routes } from 'react-router';
import './App.css';
import ListOfWorkers from './ListOfWorkers';
import WorkerDetail from './WorkerDetail';

function App() {



  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<ListOfWorkers />} />
        <Route path='worker-detail' element={<WorkerDetail/>}/>

      </Routes>


    </div>
  );
}

export default App;
