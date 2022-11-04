import { getList1, getList2 } from "./apiRequests"
import provisionalSolutionToTheLackofDatabase from "./provisionalSolutionToTheLackOfDataBase"

async function getWorkers() {
  const list1 = await getList1()
  const list2 = await getList2()

  const totalWorkers = [...list1, ...list2]
  provisionalSolutionToTheLackofDatabase(totalWorkers)

  return totalWorkers
}

export default getWorkers
