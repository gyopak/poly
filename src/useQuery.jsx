import { useNavigate, useLocation } from 'react-router';
import { useCallback } from 'react';

export const initialQuery = {};

const queryReducerParams = {};

const getDefaultParsedResult = (url) => {
  return Object.fromEntries(url.entries());
};

const customQueryReducer =
  (url) =>
    (acc, [key, params]) => {
      const { defaultValue, parseValue, getFunction = 'get' } = params;
      if (url.has(key)) {
        acc[key] = parseValue((url)[getFunction](key));
      } else {
        acc[key] = defaultValue;
      }
      return acc;
    };

export const fromSearchString = (searchString) => {
  const urlParams = new URLSearchParams(searchString);
  const defaultParsedResult = getDefaultParsedResult(urlParams);

  return Object.entries(queryReducerParams).reduce(
    customQueryReducer(urlParams),
    defaultParsedResult,
  );
};

export const extractQueryParams = (search) => {
  const parsedQuery = fromSearchString(search);
  const normalizedQuery = normalize(parsedQuery);
  const hasParams = search.includes('=');
  if (hasParams) {
    return { ...initialQuery, ...normalizedQuery };
  }
  return initialQuery;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const normalize = (query) => query;

export const toSearchString = (query) => {
  try {
    const url = new URLSearchParams();
    // eslint-disable-next-line consistent-return
    Object.entries(query).forEach(pair => {
      const [key, value] = pair;

      if (typeof value === 'string' || typeof value === 'number') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return url.set(key, value);
      }
      if (value === null || value === undefined) {
        return null; //
      }
      url.set(key, JSON.stringify(value));
    });

    url.sort();
    return url.toString();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return '';
  }
};

export function useQuery() {
  const navigate = useNavigate();
  const { search, pathname, hash } = useLocation();

  const setValueWithQuery = useCallback(
    newQuery => {
      const search = toSearchString(newQuery);
      navigate(`${pathname}?${search}${hash}`);
    },
    [hash, history, pathname]
  );
  return [extractQueryParams(search), setValueWithQuery];
}
