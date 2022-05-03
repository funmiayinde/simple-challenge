import supertest from 'supertest';
import app from '../app/app';
import { NOT_FOUND } from '../app/utils/codes';
import { TEST_NOTFOUND_URL } from './_config/routes';

test('Not Found Route', async () => {
    const response = await supertest(app).get(TEST_NOTFOUND_URL)

    expect(response.body).toBeInstanceOf(Object);
    expect(response.body._meta).toBeInstanceOf(Object);
    expect(response.body._meta).toHaveProperty('status_code');
    expect(response.body._meta.error).toBeInstanceOf(Object);
    expect(response.body._meta.error).toHaveProperty('code');
    expect(response.body._meta.error).toHaveProperty('message');
    expect(response.body._meta.error.message).toBe('Route Not Found');
    expect(response.status).toBe(NOT_FOUND);
    
});