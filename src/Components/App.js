import { Route, Routes} from 'react-router';
import { useState, useEffect } from "react";
import WorkerList from './WorkerList';
import WorkerDetail from './WorkerDetail';

function App() {

  const [workerList, setWorkerList] = useState([]);

  const [workerDetail, setWorkerDetail] = useState({});


  useEffect(() => {

    setWorkerList([{

      name: "Agamenón",
      email: "agamenón@gmail",
      active: true
    },
    {
      name: "Aquiles",
      email: "aquiles@gmail",
      active: true
    },
    {
      name: "Ulises",
      email: "ulises@gmail",
      active: false
    }])

  }, []);

 
  return (

    <div className="App">

      <Routes>

        <Route path='/' element={<WorkerList
          workerList={workerList}
          setWorkerList={setWorkerList}
          setWorkerDetail={setWorkerDetail}


        />} />

        <Route path='worker-detail' element={<WorkerDetail
          workerList={workerList}
          setWorkerList={setWorkerList}
          workerDetail={workerDetail} />} />

      </Routes>


    </div>
  );
}

export default App;
