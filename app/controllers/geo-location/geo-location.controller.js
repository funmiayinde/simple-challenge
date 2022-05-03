import _ from "lodash";
import AppError from "../../utils/app-error";
import AppResponse from "../../utils/app-response";
import { OK } from "../../utils/codes";
import GeoLocationProcessor from "./geo-location.processor";
import GeoLocationValidation from "./geo-location.validation";
import lang from '../../lang'

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
            const validate = GeoLocationValidation.validation(req.query);
            console.log('validate:', validate);
            if (!validate.passed) {
                return next(new AppError(lang.get('error').inputs, BAD_REQUEST, validate.errors));
            }
            const data = await GeoLocationProcessor.fetchGeoLocation(req.query);
            return res.status(OK).json(AppResponse.format(AppResponse.getSuccessMeta(), data));
        } catch (e) {
            return next(e);
        }
    }

}

export default GeoLocationController;