
function SwitchWorkerState({ workerList, setWorkerList, workerDetail }) {


    function workerStateSwitcher(workerList, setWorkerList, workerDetail) {

        let workerListTemplate = workerList.slice()

        workerListTemplate.forEach((worker, position) => {

            if (worker.name === workerDetail.name) {

                workerListTemplate[position].active = !workerListTemplate[position].active
            }

        })

       setWorkerList(workerListTemplate)
      
    }


    return (
        <>
            <button
                onClick={() => workerStateSwitcher(workerList, setWorkerList, workerDetail)}>
                ACTIVO/NO-ACTIVO
            </button>

        </>)
}

export default SwitchWorkerState