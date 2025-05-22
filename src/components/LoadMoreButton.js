import React from 'react';

const LoadMoreButton = ({ onLoadMore, loading }) => (
    <button onClick={onLoadMore} disabled={loading} className="load-more-button">
        {loading ? 'Loading...' : 'Load More'}
    </button>
);

export default LoadMoreButton;