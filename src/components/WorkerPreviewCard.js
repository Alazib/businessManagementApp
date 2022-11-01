import Button from "./Button/Button"
import { deleteWorker, putNewDataInWorker } from "../services/apiRequests"
import getWorkers from "../services/getWorkers"
import "../styles/WorkerPreviewCard.css"

function WorkerPreviewCard({ setWorkerList, worker, goesToWorkerDetail }) {
  const { id, avatar, first_name, last_name } = worker

  async function deleteWorkerFromList() {
    await deleteWorker(id)
    getAndSetWorkers()
  }

  async function workerStateSwitcher(id) {
    worker.active = !worker.active
    await putNewDataInWorker(id, worker)
    getAndSetWorkers()
  }

  async function getAndSetWorkers() {
    const totalWorkers = await getWorkers()
    setWorkerList(totalWorkers)
  }

  return (
    <div className="worker-preview-card-and-buttons">
      <div className="worker-preview-card">
        <div
          onClick={() => {
            goesToWorkerDetail(worker, id)
          }}
        >
          <div className="worker-preview-card-image">
            <img src={avatar} alt="avatar"></img>
          </div>
          <h5 className="worker-preview-card-name">{`${first_name} ${last_name}`}</h5>
        </div>
      </div>

      <div className="preview-card-buttons">
        <Button
          onClick={workerStateSwitcher}
          label="Active/Inactive"
          size="small"
        />
        <Button
          onClick={deleteWorkerFromList}
          label="Delete worker"
          size="small"
        />
      </div>
    </div>
  )
}

export default WorkerPreviewCard
