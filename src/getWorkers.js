import { getApiMethodResponse1, getApiMethodResponse2 } from "./apiRequests"

async function getWorkers(setWorkerList) {
  const data1 = await getApiMethodResponse1()
  const listOfWorkers1 = data1.data
  const data2 = await getApiMethodResponse2()
  const listOfWorkers2 = data2.data
  const totalWorkersList = [...listOfWorkers1, ...listOfWorkers2]
  provisionalSolutionForTheLackOfBackEnd(totalWorkersList)
  setWorkerList(totalWorkersList)
}

function provisionalSolutionForTheLackOfBackEnd(totalWorkersList) {
  totalWorkersList.forEach((worker) => {
    const { id } = worker

    if (id % 2 === 0) {
      worker.active = true
      worker.age = 35
      worker.phone = "+0034 651876458"
      worker.address = "Provisional Street 87"
    } else {
      worker.active = false
      worker.age = 43
      worker.phone = "+0034 651452359"
      worker.address = "Provisional Avenue 456"
    }
  })
}

export default getWorkers
