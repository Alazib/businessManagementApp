import { Link } from "react-router-dom"
import Button from "./Button"
import { deleteApiMethodResponse, putApiMethodResponse } from "../apiRequests"
import getWorkers from "../getWorkers"
import "../styles/WorkerPreviewCard.css"

function WorkerPreviewCard({
  workerList,
  setWorkerList,
  worker,
  setWorkerDetail,
}) {
  const { id, avatar, first_name, last_name } = worker

  async function deleteWorkerFromList() {
    await deleteApiMethodResponse(id)
    getAndSetWorkers()
  }

  async function workerStateSwitcher(id) {
    worker.active = !worker.active
    await putApiMethodResponse(id, worker)
    getAndSetWorkers()
  }

  async function getAndSetWorkers() {
    const totalWorkers = await getWorkers()
    setWorkerList(totalWorkers)
  }

  return (
    <div className="worker-preview-card-and-buttons">
      <div className="worker-preview-card">
        <Link
          to={`/worker-detail?id=${id}`}
          onClick={() => {
            setWorkerDetail(worker)
          }}
        >
          <div className="worker-preview-card-image">
            <img src={avatar} alt="avatar"></img>
          </div>
          <h5 className="worker-preview-card-name">{`${first_name} ${last_name}`}</h5>
        </Link>
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
