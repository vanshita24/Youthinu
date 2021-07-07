import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { client } from '~/utils/urqlClient';
import { useEffect, useState, useCallback } from 'react';

export function useCursorPagination({
  query,
  limit,
  filters,
  keyword,
  initialData,
}) {
  const [edges, setEdges] = useState(
    initialData?.edges ? [...initialData?.edges] : []
  );

  const [pageInfo, setPageInfo] = useState(initialData?.pageInfo);
  const [cursor, setCursor] = useState(undefined);
  const [fetching, setFetching] = useState(false);

  const fetchMore = useCallback(() => {
    if (pageInfo?.hasNextPage) {
      setCursor(pageInfo.endCursor);
    }
  }, [pageInfo]);

  useEffect(() => {
    if (cursor && !fetching) {
      setFetching(true);
      client
        .query(query, { first: limit, ...filters, after: cursor })
        .toPromise()
        .then((resp) => {
          if (resp?.data) {
            const {
              edges: _edges,
              totalCount: _totalCount,
              pageInfo: _pageInfo,
            } = resp?.data[keyword];
            setEdges((e) => [...e, ..._edges]);
            setPageInfo({ ..._pageInfo });
          }
        })
        .finally(() => {
          setCursor(null);
          setFetching(false);
        });
    }
  }, [cursor, false]);

  return { edges, fetching, fetchMore };
}

export function useCursorPaginationWithAutoLoad({
  query,
  limit,
  filters,
  keyword,
  initialData,
}) {
  const { edges, fetching, fetchMore } = useCursorPagination({
    query,
    limit,
    filters,
    keyword,
    initialData,
  });

  useBottomScrollListener(fetchMore, {
    debounce: 100,
    debounceOptions: {
      leading: false,
      trailing: true,
      maxWait: 300,
    },
  });

  return { edges, fetching };
}
