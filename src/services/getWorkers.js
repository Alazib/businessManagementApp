import { getList1, getList2 } from "./apiRequests"
import provisionalSolutionToTheLackofDatabase from "./provisionalSolutionToTheLackOfDataBase"

async function getWorkers() {
  console.log("ENTRO EN GETWORKERS")
  const list1 = await getList1()
  const list2 = await getList2()
  console.log(
    "YA TENGO LIST1 Y LIST2. Voy a hacer el array de objetos totalWorkers"
  )
  const totalWorkers = [...list1, ...list2]
  provisionalSolutionToTheLackofDatabase(totalWorkers)

  console.log("SALGO DE GETWORKERS")
  return totalWorkers
}

export default getWorkers
