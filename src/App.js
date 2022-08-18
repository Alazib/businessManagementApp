import { Route, Routes } from 'react-router';
import { useState } from "react"
import './App.css';
import ListOfWorkers from './ListOfWorkers';
import WorkerDetail from './WorkerDetail';

function App() {

  const [workerDetail, setWorkerDetail] = useState({})


  return (

    <div className="App">

      <Routes>

        <Route path='/' element={<ListOfWorkers setWorkerDetail={setWorkerDetail} />} />

        <Route path='worker-detail' element={<WorkerDetail workerDetail={workerDetail}/>} />

      </Routes>


    </div>
  );
}

export default App;
