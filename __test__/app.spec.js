import app from '../app/app';

test('App Environment', () => {

  expect(app.settings.env).toEqual('test')
})

test('App Base Path', () => {
  expect(app.mountpath).toEqual('/')
})
