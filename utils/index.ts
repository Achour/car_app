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
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};


export function updateSearchParams(type: string, value: string) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value)
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    return newPathName;
}