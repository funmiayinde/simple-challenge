import _ from "lodash";
import AppError from "../../utils/app-error";
import AppResponse from "../../utils/app-response";
import { BAD_REQUEST, OK } from "../../utils/codes";
import GeoLocationProcessor from "./geo-location.processor";
import GeoLocationValidation from "./geo-location.validation";
import lang from '../../lang';
import Validator from "validatorjs";

/**
 * @class {GeoLocationController}
 */
class GeoLocationController {

    /**
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @param {Function} next The callback to the next program handler
     * @return {Object} The response object
     */
    static async fetchGeoLocation(req, res, next) {
        try {
            const rules = {
                min_lat: 'required',
                min_lon: 'required',
                max_lat: 'required',
                max_lon: 'required',
            };
            const validator = new Validator(req.query, rules);
            if (!validator.passes()) {
                return next(new AppError(lang.get('error').inputs, BAD_REQUEST, validator.errors.all()));
            }
            const data = await GeoLocationProcessor.fetchGeoLocation(req.query);
            return res.status(OK).json(AppResponse.format(AppResponse.getSuccessMeta(), data));
        } catch (e) {
            return next(e);
        }
    }

}

export default GeoLocationController;