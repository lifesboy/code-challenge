import request from 'supertest'
import {app} from '../../bin/www'
import * as _ from 'lodash'

describe('User API', () => {
  const userData = {firstName: 'firstName', lastName: 'lastName'}

  it('should create new user', async () => {
    const res = await request(app).post('/api/user')
      .send(userData)

    expect(res.statusCode).toEqual(201)
    expect(res.body?.data?.firstName).toEqual(userData.firstName)
    expect(res.body?.data?.lastName).toEqual(userData.lastName)
  })

  it('should get filtered users', async () => {
    const userRes = await request(app).post('/api/user')
      .send(userData)
    const userId = +userRes.body?.data?.id
    expect(userId).toBeGreaterThan(0)

    const res = await request(app).get('/api/user/search')
      .query({keyword: userData.firstName})

    const filteredRows = _.filter(res.body?.data?.rows,
      (i: any) => (i.firstName?.indexOf(userData.firstName) >= 0)
        || (i.lastName?.indexOf(userData.firstName) >= 0))

    expect(res.statusCode).toEqual(200)
    expect(res.body?.data?.count).toBeGreaterThan(0)
    expect(res.body?.data?.rows).toBeTruthy()
    expect(res.body?.data?.rows).toEqual(filteredRows)
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
    const userRes = await request(app).post('/api/user')
      .send(userData)
    const userId = +userRes.body?.data?.id
    expect(userId).toBeGreaterThan(0)

    const res = await request(app).delete(`/api/user/${userId}`)
    expect(res.statusCode).toEqual(200)
    expect(res.body?.data).toEqual(true)
  })
})