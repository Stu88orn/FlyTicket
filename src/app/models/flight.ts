export type Flight = {
  airline_iata: string;
  airline_icao: string;
  flight_number: string;
  flight_iata: string;
  flight_icao: string;
  cs_airline_iata: string;
  cs_flight_iata: string;
  cs_flight_number: string;
  dep_iata: string;
  dep_icao: string;
  dep_terminals: string[];
  dep_time: string;
  dep_time_utc: string;
  arr_iata: string;
  arr_icao: string;
  arr_terminals: string;
  arr_time: string;
  arr_time_utc: string;
  duration: string;
  days: string[];
  aircraft_icao: string;
}
