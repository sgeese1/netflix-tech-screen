import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper, Select, MenuItem, FormControl, InputLabel, Box
} from '@mui/material';

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
        <Box>
            <FormControl sx={{ minWidth: 180, mb: 2 }}>
                <InputLabel id="sort-by-label">Sort by</InputLabel>
                <Select
                    labelId="sort-by-label"
                    value={sortBy}
                    label="Sort by"
                    onChange={e => setSortBy(e.target.value)}
                >
                    <MenuItem value="rating">Rating</MenuItem>
                    <MenuItem value="distance">Distance</MenuItem>
                    <MenuItem value="name">Name</MenuItem>
                </Select>
            </FormControl>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell>Distance (miles)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedShops.map((shop) => (
                            <TableRow key={shop.id}>
                                <TableCell>{shop.name}</TableCell>
                                <TableCell>{shop.rating}</TableCell>
                                <TableCell>{(shop.distance / 1609.34).toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ResultsTable;