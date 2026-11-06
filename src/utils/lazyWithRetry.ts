import { ComponentType, lazy, LazyExoticComponent } from 'react';

/**
 * Wraps React.lazy with automatic reload resilience against stale chunk hashes
 * after new production deployments.
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
): LazyExoticComponent<T> {
  return lazy(async () => {
    try {
      return await factory();
    } catch (err: unknown) {
      const errorMsg = (err as Error)?.message || '';
      const isChunkError =
        (err as Error)?.name === 'ChunkLoadError' ||
        /dynamically imported module|failed to fetch/i.test(errorMsg);

      if (isChunkError && typeof window !== 'undefined') {
        const hasReloaded = sessionStorage.getItem('chunk_retry_reloaded');
        if (!hasReloaded) {
          sessionStorage.setItem('chunk_retry_reloaded', 'true');
          window.location.reload();
          return new Promise<{ default: T }>(() => {});
        }
      }
      throw err;
    }
  });
}
