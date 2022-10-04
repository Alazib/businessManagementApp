import { render, screen } from "@testing-library/react"
import Contact from "./components/Contact"

// test("renders learn react link", () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)

//   expect(linkElement).toBeInTheDocument()
// })

test("renders 'COMING SOON . . .' notice", () => {
  render(<Contact />)
  const provisionalNotice = screen.getByText(/COMING SOON . . ./i)

  expect(provisionalNotice).toBeInTheDocument()
})
