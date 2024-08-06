const httpStatus = {
    OK: 200,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    INTERNAL_SERVER_ERROR: 500
}

const errorDictionary = {
    NOT_FOUND: "NOT FOUND",
    UNAUTHORIZED: "UNAUTHORIZED",
    FORBIDDEN: "ACCESS DENIED",
    INTERNAL_SERVER_ERROR: "INTERNAL SERVER ERROR"
}

export class HttpResponse {
    Ok(res, data) {
        return res.status(httpStatus.OK).json({
            status: httpStatus.ok,
            message: "Succesfull",
            data
        })
    }
    notFound(res, data) {
        return res.status(httpStatus.NOT_FOUND).json({
            status: httpStatus.NOT_FOUND,
            message: errorDictionary.NOT_FOUND,
            data
        })
    }
    Unauthorized(res, data) {
        return res.status(httpStatus.UNAUTHORIZED).json({
            status: httpStatus.Unauthorized,
            message: errorDictionary.UNAUTHORIZED,
            data
        })
    }
    Forbidden(res, data) {
        return res.status(httpStatus.FORBIDDEN).json({
            status: httpStatus.FORBIDDEN,
            message: errorDictionary.FORBIDDEN,
            data
        })
    }
    ServerError(res, data) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: errorDictionary.INTERNAL_SERVER_ERROR,
            data
        })
    }
}