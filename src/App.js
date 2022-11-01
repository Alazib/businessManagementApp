import { Route, Routes } from "react-router"
import { useState } from "react"
import WorkerList from "./components/WorkerList"
import WorkerDetail from "./components/WorkerDetail"
import MainMenu from "./components/MainMenu"
import MarketSurveys from "./components/MarketSurveys"
import Inventory from "./components/Inventory"
import Contact from "./components/Contact"
import NewWorker from "./components/NewWorker"

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
