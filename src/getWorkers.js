import { getList1, getList2 } from "./apiRequests"

async function getWorkers() {
  console.log("ENTRO EN GETWORKERS")
  const list1 = await getList1()
  const list2 = await getList2()
  console.log(
    "YA TENGO LIST1 Y LIST2. Voy a hacer el array de objetos totalWorkers"
  )
  const totalWorkers = [...list1, ...list2]
  provisionalSolutionForTheLackofDatabase(totalWorkers)
  console.log("SALGO DE GETWORKERS")
  return totalWorkers
}

function provisionalSolutionForTheLackofDatabase(totalWorkers) {
  totalWorkers.forEach((worker) => {
    const { id } = worker
    if (id % 2 === 0) {
      worker.active = true
      worker.age = 45
      worker.phone = "+0034 659568437"
      worker.address = "Provisional street"
    } else {
      worker.active = false
      worker.age = 38
      worker.phone = "+0034 679565433"
      worker.address = "Provisional avenue"
    }
  })

  return totalWorkers
}

export default getWorkers
