import request from 'supertest'
import {app} from './app'

describe('User API', () => {
  it('should create new user', async () => {
    const userData = {firstName: 'firstName', lastName: 'lastName'}
    const res = await request(app).post('/api/user')
      .send(userData)

    expect(res.statusCode).toEqual(200)
    expect(res.body?.data?.firstName).toEqual(userData.firstName)
    expect(res.body?.data?.lastName).toEqual(userData.lastName)
  })

  it('should get all users', async () => {
    const res = await request(app).get('/api/user/list')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({data: []})
  })

  it('should get detail user', async () => {
    const res = await request(app).get('/api/user/1')

    expect(res.statusCode).toEqual(200)
    expect(res.body?.data?.id).toEqual(1)
  })

  it('should update existed user', async () => {
    const res = await request(app).put('/api/user/1')
      .send({})
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({data: {}})
  })

  it('should delete existed user', async () => {
    const res = await request(app).delete('/api/user/1')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({data: true})
  })
})