import React, { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Paper, Box } from '@mui/material';

const LocationSelector = ({ locations, onLocationSubmit }) => {
    const [selected, setSelected] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selected) {
            onLocationSubmit(selected);
        }
    };

    return (
        <Paper sx={{ p: 3, mb: 3 }}>
            <form onSubmit={handleSubmit}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Select a Location:</FormLabel>
                    <RadioGroup
                        value={selected || ''}
                        onChange={e => setSelected(Number(e.target.value))}
                    >
                        {locations.map(location => (
                            <FormControlLabel
                                key={location.id}
                                value={location.id}
                                control={<Radio />}
                                label={`${location.name} (${location.address})`}
                            />
                        ))}
                    </RadioGroup>
                    <Box mt={2}>
                        <Button type="submit" variant="contained" disabled={!selected}>
                            Select
                        </Button>
                    </Box>
                </FormControl>
            </form>
        </Paper>
    );
};

export default LocationSelector;