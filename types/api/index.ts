export class Right<T> {
  readonly data: T;

  private constructor(data: T) {
    this.data = data;
  }

  isError(): this is Left<never> {
    return false;
  }

  static create<U>(data: U): Right<U> {
    return new Right(data);
  }
}

export class Left<T> {
  readonly error: T;

  private constructor(error: T) {
    this.error = error;
  }

  isError(): this is Left<T> {
    return true;
  }

  static create<U>(error: U): Left<U> {
    return new Left(error);
  }
}

// Based on: https://gcanti.github.io/fp-ts/modules/Either.ts.html
export type Either<T, U> = Left<T> | Right<U>;

export type ErrorType = {
  code: string;
  httpCode: number;
  message: string;
};
