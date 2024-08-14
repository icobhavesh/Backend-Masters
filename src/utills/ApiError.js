
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export { ApiError }


// class ApiError extends Error {
//     constructor(message = "something went wrong", statusCode, stack = "") {
//         super(message)
//         this.message = message,
//             this.statusCode = statusCode,
//             this.stack = this.stack,
//             this.success = false,
//             this.errors = this.errors
//         if (stack) {
//             this.stack = stack;
//         } else {
//             Error.captureStackTrace(this, this.constructor);
//         }

//     }
// }
// export {ApiError}