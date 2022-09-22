function randomNumberGenerator(minNumber, maxNumber) {
  let randomNumber = Math.floor(
    Math.random() * (maxNumber + 1 - minNumber) + minNumber
  )

  return randomNumber
}

export default randomNumberGenerator
