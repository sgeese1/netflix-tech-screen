import React, { useState } from 'react';

const LocationSelector = ({ locations, onLocationSubmit }) => {
    const [selected, setSelected] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selected) {
            onLocationSubmit(selected);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Select a Location:</h3>
            {locations.map(location => (
                <div key={location.id}>
                    <label>
                        <input
                            type="radio"
                            name="location"
                            value={location.id}
                            checked={selected === location.id}
                            onChange={() => setSelected(location.id)}
                        />
                        {location.name} ({location.address})
                    </label>
                </div>
            ))}
            <button type="submit" disabled={!selected}>
                Select
            </button>
        </form>
    );
};

export default LocationSelector;