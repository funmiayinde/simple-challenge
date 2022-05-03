import express from 'express';
import root from '../controllers/root';
import notFound from '../controllers/notfound';
import GeoLocationController from '../controllers/geo-location/geo-location.controller';

const router = express.Router();

// Routes
router.get('/', root);
router.get('/geo-location',  GeoLocationController.fetchGeoLocation);

// Fall Through Route
router.use(notFound);

module.exports = router;