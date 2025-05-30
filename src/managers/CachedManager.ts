export class CachedManager<T, K = number> {
    public readonly cache: Map<K, T> = new Map();
}
