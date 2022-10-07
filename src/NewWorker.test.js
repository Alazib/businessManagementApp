import { render, screen } from "@testing-library/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewWorker from "./components/NewWorker"
import { postNewWorker } from "./apiRequests"
import user from "@testing-library/user-event"

describe("METHOD 1 to mock fetch", () => {
  const unmockedFetch = global.fetch

  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
  })

  afterAll(() => {
    global.fetch = unmockedFetch
  })

  test("fetch should be already mocked", async () => {
    const json = await postNewWorker()
    expect(Array.isArray(json)).toEqual(true)
    expect(json.length).toEqual(0)
  })
})

describe("Applying mocking METHOD 1 to my NewWorker.js", () => {
  const unmockedFetch = global.fetch

  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve({ first_name: "Ulises" }),
      })
  })

  afterAll(() => {
    global.fetch = unmockedFetch
  })

  test("NewWorker.js should create a new worker", () => {
    // No funciona con mi caso
    render(
      <BrowserRouter>
        <Routes>
          <Route path="" element={<NewWorker />}></Route>
        </Routes>
      </BrowserRouter>
    )
    const inputFirstName = screen.getByRole("textbox", { name: "First name:" })
    const inputSaveButton = screen.getByRole("button", { name: /save/i })
    user.type(inputFirstName, "Ulises")
    user.click(inputSaveButton)

    expect(fetch).toBeCalledWith("https://reqres.in/api/users?page=1", {
      first_name: "Ulises",
    })
  })
})

describe("METHOD 2 to mock fetch", () => {
  const fetchMock = jest
    .spyOn(global, "fetch")
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve([]) })
    )

  test("fetch should be already mocked", async () => {
    // No funciona con mi caso
    const json = await postNewWorker()
    expect(fetchMock).toHaveBeenCalled()
  })
})

describe("Applying mocking METHOD 2 to my NewWorker.js", () => {
  "¿?"
})
