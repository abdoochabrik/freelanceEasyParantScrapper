export type Result<T, E> = Success<T> | Error<E>;

interface Success<T> {
  success: true;
  value: T;
}

interface Error<T> {
  success: false;
  value: T;
}
