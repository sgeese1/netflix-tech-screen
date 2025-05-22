import React, { useState, useEffect } from 'react';
import LocationSelector from './components/LocationSelector';
import ResultsTable from './components/ResultsTable';
import LoadMoreButton from './components/LoadMoreButton';
import { fetchBobaShops } from './api/yelpApi';

const LOCATIONS = [
    { id: 1, name: 'Los Gatos', address: '121 Albright Wy, Los Gatos, CA 95032' },
    { id: 2, name: 'New York', address: '888 Broadway, New York, NY 10003' },
    { id: 3, name: 'Los Angeles', address: '5808 Sunset Blvd, Los Angeles, CA 90028' },
];

const App = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [bobaShops, setBobaShops] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        if (!selectedLocation) return; // <-- Add this line
        loadBobaShops(offset === 0);
        // eslint-disable-next-line
    }, [selectedLocation, offset]);

    const loadBobaShops = async (reset = false) => {
        setLoading(true);
        const results = await fetchBobaShops(selectedLocation.address, offset);
        setBobaShops(prev => reset ? results : [...prev, ...results]);
        setHasMore(results.length === 25);
        setLoading(false);
    };

    const handleLocationSubmit = (locationId) => {
        const loc = LOCATIONS.find(l => l.id === Number(locationId));
        setSelectedLocation(loc);
        setBobaShops([]);
        setOffset(0);
        setHasMore(false);
    };

    const handleLoadMore = () => {
        setOffset(prev => prev + 25);
    };

    const handleChangeLocation = () => {
        setSelectedLocation(null);
        setBobaShops([]);
        setOffset(0);
        setHasMore(false);
    };

    return (
        <div>
            <h1>Boba Shop Finder</h1>
            {!selectedLocation ? (
                <LocationSelector
                    locations={LOCATIONS}
                    onLocationSubmit={handleLocationSubmit}
                />
            ) : (
                <>
                    <ResultsTable bobaShops={bobaShops} />
                    {hasMore && (
                        <LoadMoreButton onLoadMore={handleLoadMore} loading={loading} />
                    )}
                    <button onClick={handleChangeLocation} style={{ marginTop: 16 }}>
                        Change Location
                    </button>
                </>
            )}
        </div>
    );
};

export default App;