import request from 'supertest'
import {app} from './app'

describe('User API', () => {
  it('should get all users', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
  })
})