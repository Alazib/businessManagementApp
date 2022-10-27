import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import user from "@testing-library/user-event"
import App from "../components/App"
import HeaderNavBar from "../components/HeaderNavBar"

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

describe("when user clicks on the worker preview card", () => {
  beforeEach(() => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(mockFetch1))
      .mockImplementationOnce(() => Promise.resolve(mockFetch2))
  })

  it("the worker detail should be rendered", async () => {
    renderApp()
    const workerListLink = screen.getByRole("link", { name: /worker list/i })
    user.click(workerListLink)

    const worker1PreviewCard = await screen.findByRole("heading", {
      name: /first1 last1/i,
    })
    user.click(worker1PreviewCard)

    const updateWorkerInfoButton = await screen.findByRole("button", {
      name: /update worker info/i,
    })
  })
})
