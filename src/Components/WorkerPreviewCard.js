import { Link } from "react-router-dom"

function WorkerPreviewCard({ setWorkerDetail, worker}) {

    return (
        <>
            <Link className="worker-preview-card"
                to="worker-detail"
                onClick={() => { setWorkerDetail(worker) }}
            >{worker.name}
            </Link>
        </>
    )
}

export default WorkerPreviewCard