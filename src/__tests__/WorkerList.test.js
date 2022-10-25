import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import App from "../components/App"
import HeaderNavBar from "../components/HeaderNavBar"
import user from "@testing-library/user-event"
import { scryRenderedComponentsWithType } from "react-dom/test-utils"

const mockFetch1 = {
  json: () =>
    Promise.resolve({
      data: [
        {
          avatar: "avatar 1",
          first_name: "FIRST1",
          last_name: "LAST1",
          id: 1,
        },
      ],
    }),
}

const mockFetch2 = {
  json: () =>
    Promise.resolve({
      data: [
        {
          avatar: "avatar 2",
          first_name: "FIRST2",
          last_name: "LAST2",
          id: 2,
        },
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

  it("1 active workers and 1 non-active workers", async () => {
    renderApp()
    const workerListLink = screen.getByRole("link", { name: /worker list/i })
    user.click(workerListLink)

    await screen.findByRole("heading", { name: "ACTIVE WORKERS: 1" })
    await screen.findByRole("heading", { name: "NON-ACTIVE WORKERS: 1" })
  })

  it("2 worker cards with these elements in each one: the avatar, the name and two buttons", async () => {
    renderApp()
    const workerListLink = screen.getByRole("link", { name: /worker list/i })
    user.click(workerListLink)

    const arrayWithAllAvatars = await screen.findAllByRole("img", {
      name: /avatar/i,
    })
    const numberOfAvatars = arrayWithAllAvatars.length

    const nameWorker1 = await screen.findByRole("heading", {
      name: /first1 last1/i,
    })
    const nameWorker2 = await screen.findByRole("heading", {
      name: /first2 last2/i,
    })

    const arrayWithActiveInactiveButtons = await screen.findAllByRole(
      "button",
      {
        name: /active\/inactive/i,
      }
    )
    const arrayWithDeleteButtons = await screen.findAllByRole("button", {
      name: /delete worker/i,
    })

    const numberOfActiveInactiveButtons = arrayWithActiveInactiveButtons.length

    const numberOfDeleteButtons = arrayWithDeleteButtons.length

    expect(numberOfAvatars).toBe(2)
    expect(numberOfActiveInactiveButtons).toBe(2)
    expect(numberOfDeleteButtons).toBe(2)
  })
})
