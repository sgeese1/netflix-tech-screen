import React, { useState } from 'react';

const ResultsTable = ({ bobaShops }) => {
    const [sortBy, setSortBy] = useState('rating');

    const sortedShops = [...bobaShops].sort((a, b) => {
        if (sortBy === 'rating') {
            if (a.rating !== b.rating) return b.rating - a.rating;
            return a.distance - b.distance;
        }
        if (sortBy === 'distance') {
            if (a.distance !== b.distance) return a.distance - b.distance;
            return b.rating - a.rating;
        }
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });

    return (
        <div>
            <label>
                Sort by:{' '}
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="rating">Rating</option>
                    <option value="distance">Distance</option>
                    <option value="name">Name</option>
                </select>
            </label>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Distance (miles)</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedShops.map((shop) => (
                        <tr key={shop.id}>
                            <td>{shop.name}</td>
                            <td>{shop.rating}</td>
                            <td>{(shop.distance / 1609.34).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultsTable;