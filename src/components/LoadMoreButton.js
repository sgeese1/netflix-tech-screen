import React from 'react';
import { Button } from '@mui/material';

const LoadMoreButton = ({ onLoadMore, loading }) => (
    <Button
        onClick={onLoadMore}
        disabled={loading}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
    >
        {loading ? 'Loading...' : 'Load More'}
    </Button>
);

export default LoadMoreButton;