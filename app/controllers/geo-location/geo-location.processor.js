import axios from "axios";
import AppError from "../../utils/app-error";
import { INTERNAL_SERVER_ERROR, OK } from "../../utils/codes";
import { cache, MIN_TIME_STAMP, OPEN_STREET_URL } from "../../utils/helper";
import osmtogeojson from "osmtogeojson";
let latestCached = new Date(MIN_TIME_STAMP);

/**
 * This class is for geolocation process, it main used to do logic 
 */
class GeoLocationProcessor {
    static async fetchGeoLocation(data) {
        const { min_lat, min_lon, max_lat, max_lon } = data;
        return await axios.get(OPEN_STREET_URL, {
            params: {
                bbox: `${min_lon},${min_lat},${max_lon},${max_lat}`
            }
        })
            .then((response) => {
                console.log('response-data', response.data);
                if (response.status === OK && response.data) {
                    return osmtogeojson(response.data);
                }
                return null;
            })
            .catch((err) => {
                console.log('err:', err);
                return new AppError(err.response.description || INTERNAL_SERVER_ERROR);
            });
    }
}

export default GeoLocationProcessor;