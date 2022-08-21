

function DeleteWorker({ workerList, setWorkerList, workerDetail }) {

    function deleteWorkerFromList(workerList, setWorkerList, workerDetail) {

        let newWorkerList = workerList.filter((worker) => {

            return !(workerDetail.name === worker.name)
        })

        setWorkerList(newWorkerList)

    }


    return (

        <button onClick={() => { deleteWorkerFromList(workerList, setWorkerList, workerDetail) }}>
            BORRAR TRABAJADOR
        </button>
    )
}

export default DeleteWorker