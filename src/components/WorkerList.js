import WorkerPreviewCard from "./WorkerPreviewCard"
import { useEffect } from "react"
import getWorkers from "../services/getWorkers"
import "../styles/WorkerList.css"
import { useNavigate } from "react-router-dom"

function WorkerList({ workerList, setWorkerList, setWorkerDetail }) {
  async function getAndSetWorkers() {
    console.log(
      "Ya estoy en WorkerList y voy a llamar a getWorkers() y a setear el listado"
    )
    const totalWorkers = await getWorkers()

    setWorkerList(totalWorkers)

    console.log("Ya he seteado el listado de workers")
  }

  const navigate = useNavigate()

  useEffect(() => {
    getAndSetWorkers()
  }, [])

  const numberOfActiveWorkers = workerList.filter((worker) => {
    return worker.active
  })

  const numberOfNonActiveWorkers = workerList.filter((worker) => {
    return !worker.active
  })

  return (
    <>
      <div className="worker-list">
        <div className="active-workers">
          <h3>ACTIVE WORKERS: {numberOfActiveWorkers.length}</h3>
          {workerList.map((worker) => {
            const WORKER_IS_ACTIVE = worker.active

            return (
              <div key={worker.id}>
                {WORKER_IS_ACTIVE && (
                  <WorkerPreviewCard
                    goesToWorkerDetail={(worker, id) => {
                      setWorkerDetail(worker)
                      navigate(`/worker-detail?id=${id}`)
                    }}
                    worker={worker}
                    workerList={workerList}
                    setWorkerList={setWorkerList}
                  />
                )}
              </div>
            )
          })}
        </div>

        <div className="non-active-workers">
          <h3>NON-ACTIVE WORKERS: {numberOfNonActiveWorkers.length}</h3>
          {workerList.map((worker) => {
            const WORKER_IS_NOT_ACTIVE = !worker.active
            return (
              <div key={worker.id}>
                {WORKER_IS_NOT_ACTIVE && (
                  <WorkerPreviewCard
                    goesToWorkerDetail={(worker, id) => {
                      setWorkerDetail(worker)
                      navigate(`/worker-detail?id=${id}`)
                    }}
                    worker={worker}
                    workerList={workerList}
                    setWorkerList={setWorkerList}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default WorkerList
