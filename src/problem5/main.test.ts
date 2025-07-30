import request from 'supertest'
import {app} from './app'

describe('User API', () => {
  const userData = {firstName: 'firstName', lastName: 'lastName'}

  it('should create new user', async () => {
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
    const userRes = await request(app).post('/api/user')
      .send(userData)
    const userId = +userRes.body?.data?.id
    expect(userId).toBeGreaterThan(0)

    const res = await request(app).get(`/api/user/${userId}`)

    expect(res.statusCode).toEqual(200)
    expect(res.body?.data?.id).toEqual(userId)
  })

  it('should update existed user', async () => {
    const userRes = await request(app).post('/api/user')
      .send(userData)
    const userId = +userRes.body?.data?.id
    expect(userId).toBeGreaterThan(0)

    const updateUserData = {
      ...userData,
      firstName: 'firstName_updated',
      lastName: 'lastName_updated'
    }
    const res = await request(app).put(`/api/user/${userId}`)
      .send(updateUserData)

    expect(res.statusCode).toEqual(200)
    expect(res.body?.data?.id).toEqual(userId)
    expect(res.body?.data?.firstName).toEqual(updateUserData.firstName)
    expect(res.body?.data?.lastName).toEqual(updateUserData.lastName)
  })

  it('should delete existed user', async () => {
    const res = await request(app).delete('/api/user/1')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({data: true})
  })
})