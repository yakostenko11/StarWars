import { Character } from "../state/characters";
import { Film } from "../state/films";
import { Planet } from "../state/planets";
import { PagedData, ResourceUrl } from "../state/types";

export interface PagedResults<T> {
  count: number;
  next?: ResourceUrl;
  previous?: ResourceUrl;
  results: T[];
}

class StarWarsApi {
  private baseUrl = "https://swapi.dev/api/";
  private peopleEndpoint = "people/";
  private planetsEndpoint = "planets/";
  private filmsEndpoint = "films/";

  private defaultHeaders: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  };

  async fetchCharacters(
    search: string,
    page: number = 1
  ): Promise<PagedData<Character>> {
    const response = await this.get<PagedResults<any>>(
      `${this.baseUrl}${this.peopleEndpoint}?search=${search}&page=${page}`
    );

    const results = await Promise.all(
      response.results.map(async character => {
        return await this.mapToCharacter(character);
      })
    );

    return {
      count: response.count,
      hasMoreData: response.next !== null,
      data: results,
    } as PagedData<Character>;
  }

  async fetchPlanet(planetId: number): Promise<Planet> {
    const response = await this.get<any>(
      `${this.baseUrl}${this.planetsEndpoint}${planetId}/`
    );

    return this.mapToPlanet(response);
  }

  async fetchFilm(filmId: number): Promise<Film> {
    const response = await this.get<any>(
      `${this.baseUrl}${this.filmsEndpoint}${filmId}/`
    );

    return this.mapToFilm(response);
  }

  private getIdFromUrl(url: ResourceUrl) {
    const parts = url.split("/").reverse();
    return +parts[1];
  }

  private async mapToCharacter(character: any): Promise<Character> {
    const planetId = this.getIdFromUrl(character.homeworld);
    const planet = await this.fetchPlanet(planetId);

    return {
      id: this.getIdFromUrl(character.url),
      name: character.name,
      homeworld: planet,
      filmIds: character.films.map((filmUrl: string) =>
        this.getIdFromUrl(filmUrl)
      ),
    };
  }

  private mapToPlanet(planet: any): Planet {
    return {
      id: this.getIdFromUrl(planet.url),
      name: planet.name,
      population: planet.population,
    };
  }

  private mapToFilm(film: any): Film {
    return {
      id: this.getIdFromUrl(film.url),
      title: film.title,
      releaseDate: new Date(film["release_date"]),
      openingCrawl: film["opening_crawl"],
    };
  }

  private async get<T>(path: string, config?: RequestInit): Promise<T> {
    const init = { method: "GET", headers: this.defaultHeaders, ...config };
    return await this.makeRequest(new Request(path, init));
  }

  private async makeRequest<T>(request: RequestInfo): Promise<T> {
    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const body = (await response.json()) as Promise<T>;

    return body;
  }
}

export const starWarsApi = new StarWarsApi();
