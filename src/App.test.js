import { render, screen } from "@testing-library/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"
import Inventory from "./components/Inventory"
import MarketSurveys from "./components/MarketSurveys"
import NewWorker from "./components/NewWorker"

describe("The notice 'COMING SOON . . .' should be rendered on all these components:", () => {
  function provisionalNoticeScreener() {
    const comingSoon = screen.getByText(/COMING SOON . . ./i)
    return comingSoon
  }

  test("Contact component", () => {
    render(<Contact />)

    expect(provisionalNoticeScreener()).toBeInTheDocument()
  })
  test("Inventory component", () => {
    render(<Inventory />)

    expect(provisionalNoticeScreener()).toBeInTheDocument()
  })

  test("MarketSurveys component", () => {
    render(<MarketSurveys />)

    expect(provisionalNoticeScreener()).toBeInTheDocument()
  })
})

describe("The form to add a new worker:", () => {
  const renderNewWorkerComponent = () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="" element={<NewWorker />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }

  test("should render the 6 form inputs", () => {
    renderNewWorkerComponent()

    const inputFirstName = screen.getByRole("input", { name: /first_name/i })
    const inputLastName = screen.getByPlaceholderText(/last_name/i)
    const inputAge = screen.getByPlaceholderText(/age/i)
    const inputPhone = screen.getByPlaceholderText(/phone/i)
    const inputEmail = screen.getByPlaceholderText(/email/i)
    const inputAddress = screen.getByPlaceholderText(/address/i)

    expect(inputFirstName).toBeInTheDocument()
    expect(inputLastName).toBeInTheDocument()
    expect(inputAge).toBeInTheDocument()
    expect(inputPhone).toBeInTheDocument()
    expect(inputEmail).toBeInTheDocument()
    expect(inputAddress).toBeInTheDocument()
  })

  test("should render the button 'save'", () => {
    renderNewWorkerComponent()
    const inputSaveButton = screen.getByRole("button", { name: /save/i })
    expect(inputSaveButton).toBeInTheDocument()
  })
})
