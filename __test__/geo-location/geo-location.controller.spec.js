import app from '../../app/app';
import supertest from 'supertest';
import { OPEN_STREET_URL } from '../../app/utils/helper';
import axios from '../../__mock__/axios';
import { TEST_GEO_LOCATION_URL } from '../_config/routes';
import { sampleData } from '../_seed/geo-location.seed';
import { OK } from '../../app/utils/codes';


afterAll(() => {
  axios.mockReturnValue(undefined);
});

beforeEach(async () => {
  axios.mockReset();
  axios.get(OPEN_STREET_URL);
});

test('test fetching geo-locations from openstreetmap ', async () => {
  const response = await supertest(app)
    .get(TEST_GEO_LOCATION_URL)
    .query({ ...sampleData });
    
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body._meta).toBeInstanceOf(Object);
  expect(response.body._meta).toHaveProperty('status_code');
  expect(response.body.data).toBeInstanceOf(Object);
  expect(response.body.data).toHaveProperty('type');
  expect(response.body.data).toHaveProperty('features');
  expect(response.body.data.features).toBeInstanceOf(Array);
  expect(response.status).toBe(OK);
});
