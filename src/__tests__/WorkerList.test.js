import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import App from "../components/App"
import HeaderNavBar from "../components/HeaderNavBar"
import user from "@testing-library/user-event"

const mockFetch1 = {
  json: () =>
    Promise.resolve({
      data: [
        { first_name: "FIRST 1", last_name: "LAST 1", id: 1 },
        { first_name: "FIRST 2", last_name: "LAST 2", id: 2 },
      ],
    }),
}

const mockFetch2 = {
  json: () =>
    Promise.resolve({
      data: [
        { first_name: "FIRST 3", last_name: "LAST 3", id: 3 },
        { first_name: "FIRST 4", last_name: "LAST 4", id: 4 },
      ],
    }),
}

function renderApp() {
  return render(
    <BrowserRouter>
      <HeaderNavBar />
      <App />
    </BrowserRouter>
  )
}

describe("The worker list should render", () => {
  beforeEach(() => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(mockFetch1))
      .mockImplementationOnce(() => Promise.resolve(mockFetch2))
  })

  it("2 active workers and 2 non-active workers", async () => {
    renderApp()
    const workerListLink = screen.getByRole("link", { name: /worker list/i })
    user.click(workerListLink)

    await screen.findByRole("heading", { name: "ACTIVE WORKERS: 2" })
    await screen.findByRole("heading", { name: "NON-ACTIVE WORKERS: 2" })
  })

  it("4 worker cards with these elements in each one: the photo, the name and two buttons", () => {})
})
