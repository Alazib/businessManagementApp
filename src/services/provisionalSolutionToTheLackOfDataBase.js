function provisionalSolutionToTheLackofDatabase(totalWorkers) {
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

export default provisionalSolutionToTheLackofDatabase
