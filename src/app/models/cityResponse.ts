import { AirportsByCountries } from './airportsByCountries';
import { AirportsByCities } from './airportsByCities';
import { CitiesByAirports } from './citiesByAirports';
import { CitiesByCountries } from './citiesByCountries';
import { Airports } from './airports';
import { Countries } from './countries';
import { Cities } from './city';

export type CityResponse = {
  response: {
    countries : Countries[];
    cities : Cities[];
    airports : Airports[];
    cities_by_airports : CitiesByAirports[];
    cities_by_countries : CitiesByCountries[];
    airports_by_cities : AirportsByCities[];
    airports_by_countries : AirportsByCountries[];
  }
}
