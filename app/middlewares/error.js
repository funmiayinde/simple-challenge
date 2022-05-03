import AppError from "../utils/app-error";
import { assign, extend } from 'lodash';
import AppResponse from "../utils/app-response";
import { INTERNAL_SERVER_ERROR } from "../utils/codes";

export default (error, req, res, next) => {
    const meta = {};
    if (error instanceof AppError) {
        const err = error.format();
        const code = err.code;
        extend(meta, { status_code: code, error: { code, message: error.message } });
        if (err.messages) {
            extend(meta.error, { messages: err.messages });
        }
    } else if (error instanceof Error) {
        const code = error.status || 500;
        extend(meta, { status_code: code, error: { code, message: error.message } });
        if (process.env.NODE_ENV !== 'production') {
            assign(meta.error, { developer_message: error });
        }
    } else {
        extend(meta, { status_code: INTERNAL_SERVER_ERROR, error: { message: 'A problem with our server, please try again later' } });
        if (process.env.NODE_ENV !== 'production') {
            assign(meta.error, { developer_message: error });
        }
    }
    return res.status(meta.status_code).json(AppResponse.format(meta));
};