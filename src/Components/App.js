import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import workerListGenerator from "../workerListGenerator";
import WorkerList from "./WorkerList";
import WorkerDetail from "./WorkerDetail";
import MainMenu from "./MainMenu";
import photo from "../image.png";

function App() {
  const [workerList, setWorkerList] = useState([]);
  const [workerDetail, setWorkerDetail] = useState({});

  useEffect(() => {
    const listOfWorkers = workerListGenerator();

    setWorkerList(listOfWorkers);
  }, []);

  console.log(workerDetail);

  return (
    <div className="app">
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
          path="worker-detail"
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
      <img
        src={photo}
        alt="foto"
        style={{ display: "block", margin: "auto", paddingTop: "100px" }}
      ></img>
    </div>
  );
}

export default App;
