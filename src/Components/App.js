import { Route, Routes } from 'react-router';
import { useState } from "react";
import ListOfWorkersCards from './ListOfWorkerCards';
import WorkerDetail from './WorkerDetail';

function App() {

  const [workerDetail, setWorkerDetail] = useState({});

  const [workerIsActive, setWorkerIsActive] = useState(true);

  console.log(workerDetail.name, workerDetail.active)

  return (

    <div className="App">

      <Routes>

        <Route path='/' element={<ListOfWorkersCards setWorkerDetail={setWorkerDetail} workerIsActive={workerIsActive} />} />

        <Route path='worker-detail' element={<WorkerDetail workerDetail={workerDetail} setWorkerIsActive={setWorkerIsActive}/>} />

      </Routes>


    </div>
  );
}

export default App;
