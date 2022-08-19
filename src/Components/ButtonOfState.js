

function ButtonOfState({ workerList, setWorkerList, workerDetail }) {


    function WorkerStateSwitcher(workerList, setWorkerList, workerDetail) {

        let workerListTemplate = workerList
        
        if(workerDetail.active === false) {

            workerListTemplate[2].active = true
        }

        setWorkerList(workerListTemplate)
        
    }

    console.log("SOY EL BOTÓN: ", workerDetail.name, workerDetail.active)


    return (
        <>
            <button
                onClick={() => WorkerStateSwitcher(workerList, setWorkerList, workerDetail)}>
                SOY UN BOTÓN
            </button>

        </>)
}

export default ButtonOfState