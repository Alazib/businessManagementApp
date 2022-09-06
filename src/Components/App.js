import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { avatar } from "../avatarGenerator";
import nextId from "react-id-generator";
import randomNumberGenerator from "../randomNumberGenerator";
import WorkerList from "./WorkerList";
import WorkerDetail from "./WorkerDetail";
import MainMenu from "./MainMenu";

function App() {
  const [workerList, setWorkerList] = useState([]);
  const [workerDetail, setWorkerDetail] = useState({});

  function workerListGenerator() {
    const MIN_NUMBER_OF_WORKERS = 6;
    const MAX_NUMBER_OF_WORKERS = 20;
    let numberOfTotalWorkers = randomNumberGenerator(
      MIN_NUMBER_OF_WORKERS,
      MAX_NUMBER_OF_WORKERS
    );
    const originalWorkerList = [];
    const { name, mersenne, address, phone, datatype } = faker;

    for (let i = 0; i < numberOfTotalWorkers; i++) {
      const fakeName = name.fullName();
      const fakeEmail = `${fakeName}@gmail.com`;
      const fakeAddress = `${address.cityName()}, ${address.streetAddress()}, building ${mersenne.rand(
        0,
        200
      )}`;

      const worker = {
        id: nextId(),
        photo: avatar.generateRandomAvatar(),
        name: fakeName,
        email: fakeEmail,
        age: faker.mersenne.rand(18, 65),
        address: fakeAddress,
        phoneNumber: phone.number("6## ## ## ##"),
        active: datatype.boolean(),
      };

      originalWorkerList.push(worker);
    }

    return originalWorkerList;
  }

  useEffect(() => {
    const listOfWorkers = workerListGenerator();

    setWorkerList(listOfWorkers);
  }, []);

  console.log(workerDetail);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu />} />

        <Route
          path="worker-list"
          element={
            <WorkerList
              workerList={workerList}
              setWorkerList={setWorkerList}
              setWorkerDetail={setWorkerDetail}
            />
          }
        />

        <Route
          path="worker-list/worker-detail"
          element={
            <WorkerDetail
              workerList={workerList}
              setWorkerList={setWorkerList}
              workerDetail={workerDetail}
              setWorkerDetail={setWorkerDetail}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
