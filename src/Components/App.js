import { Route, Routes } from 'react-router';
import { useState, useEffect } from "react";
import { faker } from '@faker-js/faker';
import { avatar } from '../avatarGenerator';
import randomNumberGenerator from '../randomNumberGenerator';
import WorkerList from './WorkerList';
import WorkerDetail from './WorkerDetail';

function App() {

  const [workerList, setWorkerList] = useState([]);
  const [workerDetail, setWorkerDetail] = useState({});


  function workerListGenerator() {

    const MIN_NUMBER_OF_WORKERS = 6
    const MAX_NUMBER_OF_WORKERS = 20
    const ORIGINAL_WORKER_LIST = []
    let NUMBER_OF_TOTAL_WORKERS = randomNumberGenerator(MIN_NUMBER_OF_WORKERS, MAX_NUMBER_OF_WORKERS)

    for (let i = 0; i < NUMBER_OF_TOTAL_WORKERS; i++) {

      const worker = {

        photo: avatar.generateRandomAvatar(),
        name: faker.name.fullName(),
        age: faker.mersenne.rand(18, 65),
        address: `${faker.address.cityName()}, ${faker.address.streetAddress()}, building ${faker.mersenne.rand(0, 200)}`,
        phoneNumber: faker.phone.number("6## ## ## ##"),
        active: faker.datatype.boolean()

      }

      worker.email = `${worker.name}@gmail.com`

      ORIGINAL_WORKER_LIST.push(worker)
    }

    return ORIGINAL_WORKER_LIST

  }


  useEffect(() => {

    setWorkerList(workerListGenerator())

  }, []);

  console.log(workerList)


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
