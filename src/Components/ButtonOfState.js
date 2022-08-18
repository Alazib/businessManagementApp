

function ButtonOfState({ workerDetail, setWorkerState }) {


    function WorkerStateSwitcher(workerDetail, setWorkerState) {

        alert("All workers will change his state. Are you sure?")

        workerDetail.state === "active" ? setWorkerState("non-active")
            :
            setWorkerState("active")

    }

    return (
        <>
            <button
                onClick={() => WorkerStateSwitcher(workerDetail, setWorkerState)}>
                SOY UN BOTÓN
            </button>

        </>)
}

export default ButtonOfState