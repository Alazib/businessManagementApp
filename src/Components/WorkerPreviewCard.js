import { Link } from "react-router-dom"
import ButtonOfState from "./ButtonOfState"

function WorkerPreviewCard({ workerList, setWorkerList, worker, setWorkerDetail }) {

    console.log("Soy WorkerPreviewCard", worker.name)

    return (
        <>
            <Link className="worker-preview-card"
                to="worker-detail"
                onClick={() => { setWorkerDetail(worker) }}
            >{worker.name}
            </Link>
            <ButtonOfState
                workerList={workerList}
                setWorkerList={setWorkerList}
                workerDetail={worker}/>
        </>
    )
}

export default WorkerPreviewCard