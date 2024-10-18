import axios from 'axios';

const BASE_URL = 'http://localhost:8081/conversion';

export const convertLength = async (value, fromUnit, toUnit) => {
    const response = await axios.post(`${BASE_URL}/length`, {
        value,
        fromUnit,
        toUnit,
    });
    return response.data;
};

export const convertWeight = async (value, fromUnit, toUnit) => {
    const response = await axios.post(`${BASE_URL}/weight`, {
        value,
        fromUnit,
        toUnit,
    });
    return response.data;
};

export const convertTemp = async (value, fromUnit, toUnit) => {
    const response = await axios.post(`${BASE_URL}/temp`, {
        value,
        fromUnit,
        toUnit,
    });
    return response.data;
};
