import { Link } from "react-router-dom"
import DeleteWorker from "./Buttons/DeleteWorker"
import SwitchWorkerState from "./Buttons/SwitchWorkerState"

function WorkerPreviewCard({ workerList, setWorkerList, worker, setWorkerDetail }) {

    return (
        <>
            <Link className="worker-preview-card"
                to="worker-detail"
                onClick={() => { setWorkerDetail(worker) }}
            >{worker.name}
            </Link>

            <SwitchWorkerState
                workerList={workerList}
                setWorkerList={setWorkerList}
                workerDetail={worker} />

            <DeleteWorker
                workerList={workerList}
                setWorkerList={setWorkerList}
                workerDetail={worker}/>

        </>
    )
}

export default WorkerPreviewCard