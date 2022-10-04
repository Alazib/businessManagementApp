import { render, screen } from "@testing-library/react"
import Contact from "./components/Contact"

test("renders 'COMING SOON . . .' notice", () => {
  render(<Contact />)
  const provisionalNotice = screen.getByText(/COMING SOON . . ./i)

  expect(provisionalNotice).toBeInTheDocument()
})
