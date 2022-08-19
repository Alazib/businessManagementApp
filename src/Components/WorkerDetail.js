import { Link } from "react-router-dom";
import ButtonOfState from "./ButtonOfState"

function WorkerDetail({ workerDetail, setWorkerIsActive}) {

    return (
        <>
            <div>{workerDetail.email}</div>

            <Link
                to={"/"}>
                GO BACK
            </Link>

            <ButtonOfState
                workerDetail={workerDetail}
                setWorkerIsActive={setWorkerIsActive}
            >SOY UN BOTÓN
            </ButtonOfState>

        </>
    )
}

export default WorkerDetail