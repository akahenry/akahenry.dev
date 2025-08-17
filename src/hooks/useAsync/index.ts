import { useEffect, useState } from "react";

type AsyncStateLoading = { loading: true; data: undefined; error: undefined };
type AsyncStateError = { loading: false; data: undefined; error: unknown };
type AsyncStateSuccess<T> = { loading: false; data: T; error: undefined };

export type UseAsyncResult<T> =
  | AsyncStateLoading
  | AsyncStateError
  | AsyncStateSuccess<T>;

export function useAsync<T>(
  asyncFn: () => Promise<T>,
  deps: React.DependencyList = [],
): UseAsyncResult<T> {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<unknown | undefined>(undefined);

  useEffect(() => {
    let isActive = true;

    asyncFn()
      .then((result) => {
        if (isActive) setData(result);
      })
      .catch((err) => {
        if (isActive) setError(err);
      })
      .finally(() => {
        if (isActive) setLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, deps);

  if (loading) return { loading: true, data: undefined, error: undefined };
  if (error !== undefined)
    return { loading: false, data: undefined, error };
  return { loading: false, data: data as T, error: undefined };
}

