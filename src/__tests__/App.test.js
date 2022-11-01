import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import user from "@testing-library/user-event"
import HeaderNavBar from "../components/HeaderNavBar"
import App from "../App"

function provisionalNoticeScreener() {
  const comingSoon = screen.getByText(/COMING SOON . . ./i)
  return comingSoon
}

function renderApp() {
  return render(
    <BrowserRouter>
      <HeaderNavBar />
      <App></App>
    </BrowserRouter>
  )
}

describe("when the app is loaded it should render", () => {
  it("a navbar with six links", () => {
    renderApp()
    screen.getByRole("link", { name: /worker list/i })
    screen.getByRole("link", { name: /new worker/i })
    screen.getByRole("link", { name: /market surveys/i })
    screen.getByRole("link", { name: /inventory/i })
    screen.getByRole("link", { name: /contact/i })
    screen.getByRole("link", { name: /main menu/i })
  })

  it("the main menu photo", () => {
    renderApp()
    screen.getByRole("img", { name: /main menu/i })
  })
})

describe("when the user clicks on the following links it should be rendered the notice 'COMING SOON. . .'", () => {
  it("Contact link", () => {
    renderApp()
    const contactLink = screen.getByRole("link", { name: /contact/i })
    user.click(contactLink)

    expect(provisionalNoticeScreener()).toBeInTheDocument()
  })
  it("Inventory link", () => {
    renderApp()

    const inventoryLink = screen.getByRole("link", { name: /inventory/i })
    user.click(inventoryLink)

    expect(provisionalNoticeScreener()).toBeInTheDocument()
  })

  it("MarketSurveys link", () => {
    renderApp()
    const marketSurveystLink = screen.getByRole("link", {
      name: /market surveys/i,
    })
    user.click(marketSurveystLink)

    expect(provisionalNoticeScreener()).toBeInTheDocument()
  })
})
