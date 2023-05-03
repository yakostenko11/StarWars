import { Provider as ReduxProvider } from 'react-redux'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
import configureStore from "./state/store";
import { starWarsApi } from "./services/starWarsApi";

jest.spyOn(window, "fetch");
jest.spyOn(starWarsApi, "fetchPlanet")

const mockedFetch = window.fetch as jest.Mock;
const mockedFetchPlanet = starWarsApi.fetchPlanet as jest.Mock

describe("<App />", () => {
  beforeEach(() => {
    const store = configureStore()

    render(<ReduxProvider store={ store }><App /></ReduxProvider>)
  })

  it('should show a search form', () => {
    const formTitleElement = screen.getByText(/Search Your Favorite Characters/i)
    expect(formTitleElement).toBeInTheDocument()
  })

  it("should show a list of found characters", async () => {
    mockedFetchPlanet.mockResolvedValueOnce({
        url: "http://some-url/1/",
        name: "Tatooine",
        population: "200000"
    })

    mockedFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => {
        return {
          count: 1,
          next: null,
          previous: null,
          results: [
            {
              name: "Luke Skywalker",
              url: "http://some-url/1/",
              homeworld: "http://some-url/1/",
              films: ["http://some-url/1/"]
            },
          ],
        };
      },
    });

    const searchInput = screen.getByPlaceholderText(/search a character/i);
    userEvent.type(searchInput, "luke")

    const searchButton = screen.getByRole('button', { name: /search/i })
    await userEvent.click(searchButton)

    const characterName = await screen.findByText(/luke skywalker/i)
    const planetName = await screen.findByText(/Tatooine/i)
    const population = await screen.findByText(/200000/i)

    expect(characterName).toBeInTheDocument()
    expect(planetName).toBeInTheDocument()
    expect(population).toBeInTheDocument()
  });

  it('should not show list of characters if not existing character name was provided', async () => {
    mockedFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => {
        return {
          count: 0,
          next: null,
          previous: null,
          results: [],
        };
      },
    });

    const searchInput = screen.getByPlaceholderText(/search a character/i);
    userEvent.type(searchInput, "not-existing-character")

    const searchButton = screen.getByRole('button', { name: /search/i })
    await userEvent.click(searchButton)

    const notFoundText = await screen.findByText(/no characters found/i)
    expect(notFoundText).toBeInTheDocument()
  })

  it('should show error message if error occurred', async () => {
    mockedFetch.mockRejectedValueOnce(new Error('An error occurred'))

    const searchInput = screen.getByPlaceholderText(/search a character/i);
    userEvent.type(searchInput, "luke")

    const searchButton = screen.getByRole('button', { name: /search/i })
    await userEvent.click(searchButton)

    const notFoundText = await screen.findByText(/an error occurred/i)
    expect(notFoundText).toBeInTheDocument()
  })
});
