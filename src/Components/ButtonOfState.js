

function ButtonOfState({ workerDetail, setWorkerIsActive }) {

    console.log(workerDetail.active)


    function WorkerStateSwitcher(workerDetail, setWorkerIsActive) {

        console.log(workerDetail.name, workerDetail.active)

        alert("All workers will change their states. Are you sure?")

        workerDetail.active === true ? setWorkerIsActive(false) : setWorkerIsActive(true)


        console.log(workerDetail.name, workerDetail.active)

    }

    return (
        <>
            <button
                onClick={() => WorkerStateSwitcher(workerDetail, setWorkerIsActive)}>
                SOY UN BOTÓN
            </button>

        </>)
}

export default ButtonOfState