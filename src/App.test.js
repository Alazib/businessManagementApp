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

    const inputFirstName = screen.getByRole("textbox", { name: "First name:" })
    const inputLastName = screen.getByRole("textbox", { name: "Last name:" })
    const inputAge = screen.getByRole("textbox", { name: "Age:" })
    const inputPhone = screen.getByRole("textbox", { name: "Phone:" })
    const inputEmail = screen.getByRole("textbox", { name: "Email:" })
    const inputAddress = screen.getByRole("textbox", { name: "Address:" })
  })

  test("should render the button 'save'", () => {
    renderNewWorkerComponent()
    const inputSaveButton = screen.getByRole("button", { name: /save/i })
    expect(inputSaveButton).toBeInTheDocument()
  })
})
