import supertest from 'supertest';
import app from '../app/app';
import {  OK } from '../app/utils/codes';
import {  TEST_ROOT_URL } from './_config/routes';

test('Root Controller', async () => {
    const response = await supertest(app).get(TEST_ROOT_URL)

    expect(response.body).toBeInstanceOf(Object);
    expect(response.body._meta).toBeInstanceOf(Object);
    expect(response.body._meta).toHaveProperty('status_code');
    expect(response.body._meta).toHaveProperty('success');
    expect(response.body._meta).toHaveProperty('message');
    expect(response.body._meta.message).toBe('Hello world');
    expect(response.status).toBe(OK);
    
});