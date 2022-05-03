import _ from "lodash";
import { OK } from "./codes";


/**
 * The AppResponse class
 * This class is responsibl for json response
 */
class AppResponse {

    /**
     * @returns {Object} The succss response object
     */
    static getSuccessMeta() {
        return { status_code: OK, success: true };
    }

    /**
     * 
     * @param {Object} meta The meta object
     * @param {*} data Success response object
     * @returns {Object} The success response object
     */
    static format(meta, data = null) {
        let response = {};
        _.assign(response, { _meta: meta });
        if (meta.code) {
            meta.status_code = meta.code;
            delete meta.code;
        }
        if (data) {
            response.data = data;
        }
        return response;
    }
}
export default AppResponse;