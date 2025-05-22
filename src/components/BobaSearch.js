import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationSelector from './LocationSelector';
import ResultsTable from './ResultsTable';
import LoadMoreButton from './LoadMoreButton';
import { fetchBobaShops } from '../api/yelpApi';

const BobaSearch = () => {
    const [location, setLocation] = useState('Los Angeles');
    const [bobaShops, setBobaShops] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const locations = [
        { name: 'Los Angeles', value: 'Los Angeles' },
        { name: 'San Francisco', value: 'San Francisco' },
        { name: 'New York', value: 'New York' },
    ];

    useEffect(() => {
        loadBobaShops();
    }, [location, offset]);

    const loadBobaShops = async () => {
        setLoading(true);
        const results = await fetchBobaShops(location, offset);
        if (results.length === 0) {
            setHasMore(false);
        }
        setBobaShops(prev => [...prev, ...results]);
        setLoading(false);
    };

    const handleLoadMore = () => {
        setOffset(prev => prev + 10);
    };

    return (
        <div>
            <h1>Boba Shop Finder</h1>
            <LocationSelector locations={locations} selectedLocation={location} setSelectedLocation={setLocation} />
            <ResultsTable bobaShops={bobaShops} />
            {hasMore && <LoadMoreButton loading={loading} onLoadMore={handleLoadMore} />}
        </div>
    );
};

export default BobaSearch;

