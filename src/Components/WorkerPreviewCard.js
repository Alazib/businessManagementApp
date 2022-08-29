import { Link } from "react-router-dom"
import DeleteWorker from "./Buttons/DeleteWorker"
import SwitchWorkerState from "./Buttons/SwitchWorkerState"
import "../styles/WorkerPreviewCard.css"

function WorkerPreviewCard({ workerList, setWorkerList, worker, setWorkerDetail }) {

    return (

        <div className="worker-preview-card">

            <Link
                to="worker-detail"
                onClick={() => { setWorkerDetail(worker) }}
            ><div className="image">
                    <img
                        src={worker.photo} alt="avatar">

                    </img>
                </div>
                {<b>{worker.name}</b>}
            </Link>

            <div className="Buttons">

                <SwitchWorkerState
                    workerList={workerList}
                    setWorkerList={setWorkerList}
                    workerDetail={worker} />

                <DeleteWorker
                    workerList={workerList}
                    setWorkerList={setWorkerList}
                    workerDetail={worker} />
            </div>

        </div>


    )
}

export default WorkerPreviewCard