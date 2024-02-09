class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something Went Wrong",
    errors = [],
    stack = []
  ) {
    // Super is used to override
    super(message);
    (this.statusCode = statusCode),
      (this.data = null),
      (this.message = message),
      (this.errors = errors);

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
