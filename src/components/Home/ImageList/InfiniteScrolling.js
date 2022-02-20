import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

export const InfiniteScrolling = ({ loadMore, children }) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={loadMore}
    hasMore={true || false}
    threshold={1100}
    initialLoad={false}
  >
    {children}
  </InfiniteScroll>
);
