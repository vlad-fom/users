import { useState } from "react"

export const useFetching = (callback: Function): [() => Promise<void>, boolean, string] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');;
  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      const error = (e as Error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error]
}