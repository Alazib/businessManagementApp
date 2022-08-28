import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { avatar } from "../avatarGenerator";
import randomNumberGenerator from "../randomNumberGenerator";
import WorkerList from "./WorkerList";
import WorkerDetail from "./WorkerDetail";

function App() {
  const [workerList, setWorkerList] = useState([]);
  const [workerDetail, setWorkerDetail] = useState({});

  function workerListGenerator() {
    const MIN_NUMBER_OF_WORKERS = 6;
    const MAX_NUMBER_OF_WORKERS = 20;
    // ORIGINAL_WORKER_LIST seria en minusculas porque se va a modificar, no tiene el mismo contenido todo el tiempo.
    const ORIGINAL_WORKER_LIST = [];
    let NUMBER_OF_TOTAL_WORKERS = randomNumberGenerator(
      MIN_NUMBER_OF_WORKERS,
      MAX_NUMBER_OF_WORKERS
    );

    for (let i = 0; i < NUMBER_OF_TOTAL_WORKERS; i++) {
      // const { name, mersenne, address, phone, datatype } = faker;

      // Esto tiene la suficiente chicha como para querer sacarlo fuera, pero no esta mal construirlo dentro del objeto, cuestión de claridad de cada uno.
      // const fakeAddress = `${address.cityName()}, ${address.streetAddress()}, building ${mersenne.rand(
      //   0,
      //   200
      // )}`;
      // Saco name fuera porque lo vamos a utilizar para el email
      // const fakeName = name.fullName()
      // const fakeEmail = `${fakeName}@gmail.com`;

      // const worker = {
      //   photo: avatar.generateRandomAvatar(),
      //   name: fakeName,
      //   email: fakeEmail,
      //   age: mersenne.rand(18, 65),
      //   address: fakeAddress,
      //   phoneNumber: phone.number("6## ## ## ##"),
      //   active: datatype.boolean(),
      // };

      const worker = {
        photo: avatar.generateRandomAvatar(),
        name: faker.name.fullName(),
        age: faker.mersenne.rand(18, 65),
        address: `${faker.address.cityName()}, ${faker.address.streetAddress()}, building ${faker.mersenne.rand(
          0,
          200
        )}`,
        phoneNumber: faker.phone.number("6## ## ## ##"),
        active: faker.datatype.boolean(),
      };
      // Entiendo el porque el email lo declaras aparte, pero le damos una vuelta.
      worker.email = `${worker.name}@gmail.com`;

      ORIGINAL_WORKER_LIST.push(worker);
    }

    console.log(ORIGINAL_WORKER_LIST);

    return ORIGINAL_WORKER_LIST;
  }

  useEffect(() => {
    // No esta mal, y dependiendo del developer le gustara tu manera o la mia, pero yo te pongo la mia
    // const listOfWorkers = workerListGenerator()
    // setWorkerList(listOfWorkers)
    setWorkerList(workerListGenerator());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <WorkerList
              workerList={workerList}
              setWorkerList={setWorkerList}
              setWorkerDetail={setWorkerDetail}
            />
          }
        />
        {/* Vale, aqui tener una ruta worker-detail solo tiene sentido si en la URL tuvieramos un parametro para recuperar el trabajador estilo localhost/workerdetail/123 y con ese id recuperamos el trabajador */}
        {/* Si voy a esta ruta directamente sin pasar por listado no me cargara nada. */}
        <Route
          path="worker-detail"
          element={
            <WorkerDetail
              workerList={workerList}
              setWorkerList={setWorkerList}
              workerDetail={workerDetail}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
