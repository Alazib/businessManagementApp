import { Route, Routes } from "react-router"
import { useState } from "react"
import WorkerList from "./WorkerList"
import WorkerDetail from "./WorkerDetail"
import MainMenu from "./MainMenu"
import MarketSurveys from "./MarketSurveys"
import Inventory from "./Inventory"
import Contact from "./Contact"
import NewWorker from "./NewWorker"

function App() {
  const [workerList, setWorkerList] = useState([])

  const [workerDetail, setWorkerDetail] = useState({})

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
        <Route path="market-surveys" element={<MarketSurveys />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="contact" element={<Contact />} />
        <Route path="new-worker" element={<NewWorker />} />
      </Routes>
    </div>
  )
}

export default App
