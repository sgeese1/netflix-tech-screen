import axios from 'axios';

// If more time allowed, use backend proxy and env file to store API key, or use a secrets provider
const API_KEY = 'Add API Key Here'; // Replace with your Yelp API key
const BASE_URL = 'https://api.yelp.com/v3/businesses/search';

export const fetchBobaShops = async (location) => {
    try {
        const response = await axios.get(BASE_URL, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
            params: {
                term: 'boba',
                location: location,
                radius: 10000, // 6 miles in meters
                sort_by: 'rating',
            },
        });
        return response.data.businesses;
    } catch (error) {
        console.error('Error fetching boba shops:', error);
        throw error;
    }
};