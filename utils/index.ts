import { CarProps } from "@/types";
import { FilterProps } from "@/types";
export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters

    const headers = {

        'X-RapidAPI-Key': 'e1e279cfc1mshcc27012c32c675bp106b9ejsn4072632b2113',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'

    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&manufacturer=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
        {
            headers: headers
        })


    const result = await response.json();

    return result

}

export function generateCarImageUrl(car: CarProps, angle?: string) {




}


export const calculateCarRent = (city_mpg: number, year: number) => {
    // Define base rent price per year
    const basePricePerYear = 2000; // Adjust this value as needed

    // Define a multiplier based on city MPG
    let mpgMultiplier;

    if (city_mpg >= 30) {
        mpgMultiplier = 1.2; // Good fuel efficiency
    } else if (city_mpg >= 20) {
        mpgMultiplier = 1; // Average fuel efficiency
    } else {
        mpgMultiplier = 0.8; // Poor fuel efficiency
    }

    // Calculate the annual rent price
    const annualRentPrice = basePricePerYear * (year - 2000 + 1) * mpgMultiplier;

    // Calculate the daily rent price (assuming 365 days in a year)
    const rentPerDay = Math.floor(annualRentPrice / 365);

    return rentPerDay;
};


export function updateSearchParams(type: string, value: string) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value)
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    return newPathName;
}