import { Airports_by_countries } from './airports_by_countries';
import { Airports_by_cities } from './airports_by_cities';
import { Cities_by_airports } from './cities_by_airports';
import { Cities_by_countries } from './cities_by_countries';
import { Airports } from './airports';
import { Countries } from './countries';
import { Cities } from './city';

export type CityResponse = {
  response: {
    countries : Countries[];
    cities : Cities[];
    airports : Airports[];
    cities_by_airports : Cities_by_airports[];
    cities_by_countries : Cities_by_countries[];
    airports_by_cities : Airports_by_cities[];
    airports_by_countries : Airports_by_countries[];
  }
}
