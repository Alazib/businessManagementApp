import { Link } from "react-router-dom";
import ButtonOfState from "./ButtonOfState"

function WorkerDetail({ workerDetail, setWorkerState }) {

    return (
        <>
            <div>{workerDetail.email}</div>

            <Link
                to={"/"}>
                GO BACK
            </Link>

            <ButtonOfState
                workerDetail={workerDetail}
                setWorkerState={setWorkerState}
            >SOY UN BOTÓN
            </ButtonOfState>

        </>
    )
}

export default WorkerDetail