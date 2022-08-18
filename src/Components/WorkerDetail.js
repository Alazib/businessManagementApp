import { Link } from "react-router-dom"

function WorkerDetail({workerDetail}) {

    return (
        <>
            <div>{workerDetail.email}</div>
            <Link to={"/"}>GO BACK</Link>
        </>
    )
}

export default WorkerDetail