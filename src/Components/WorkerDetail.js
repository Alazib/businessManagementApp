import { Link } from "react-router-dom";
import DeleteWorker from "./Buttons/DeleteWorker";
import SwitchWorkerState from "./Buttons/SwitchWorkerState"

function WorkerDetail({ workerList, setWorkerList, workerDetail }) {

    return (
        <>
            <div>{workerDetail.email}</div>

            <Link
                to={"/"}>
                GO BACK
            </Link>

            <SwitchWorkerState
                workerList={workerList}
                setWorkerList={setWorkerList}
                workerDetail={workerDetail}

            />

            <DeleteWorker
                workerList={workerList}
                workerDetail={workerDetail}
                setWorkerList={setWorkerList}
            />




        </>
    )
}

export default WorkerDetail