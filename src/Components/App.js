import { Route, Routes } from 'react-router';
import { useState, useEffect } from "react";
import ListOfWorkersCards from './ListOfWorkerCards';
import WorkerDetail from './WorkerDetail';

function App() {

  const [workerDetail, setWorkerDetail] = useState({});

  console.log("SOY APP:", "nombre del trabajador ->", workerDetail.name, "estado del trabajador ->", workerDetail.active)


  return (

    <div className="App">

      <Routes>

        <Route path='/' element={<ListOfWorkersCards
          setWorkerDetail={setWorkerDetail}

        />} />

        <Route path='worker-detail' element={<WorkerDetail
          workerDetail={workerDetail} />} />

      </Routes>


    </div>
  );
}

export default App;
