import { Route, Routes } from 'react-router';
import { useState } from "react";
import ListOfWorkersCards from './ListOfWorkerCards';
import WorkerDetail from './WorkerDetail';

function App() {

  const [workerDetail, setWorkerDetail] = useState({});
  const [workerState, setWorkerState] = useState("active")


  console.log(workerDetail.name, workerDetail.state)

  
  return (

    <div className="App">

      <Routes>

        <Route path='/' element={<ListOfWorkersCards setWorkerDetail={setWorkerDetail} workerState={workerState} />} />

        <Route path='worker-detail' element={<WorkerDetail workerDetail={workerDetail} setWorkerState={setWorkerState}/>} />

      </Routes>


    </div>
  );
}

export default App;
