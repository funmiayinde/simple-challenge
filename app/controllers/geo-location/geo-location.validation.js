import _ from "lodash";
import lang from "../../lang";
import AppError from "../../utils/app-error";
import Validator from "validatorjs";

/**
 * @class {GeoLocationValidation}
 */
export default class GeoLocationValidation {

    /**
     * @param {Object} body 
     * @returns {AppError | null}
     */
    static async validation(body) {
        const rules = {
            min_lat: 'required',
            min_lon: 'required',
            max_lat: 'required',
            max_lon: 'required',
        };
        const validator = new Validator(body, rules);
        return {
            errors: validator.errors.all(),
            passed: validator.passes(),
        }
    }
}