import * as request from 'supertest'
import {app} from '../../bin/www'
import * as _ from 'lodash'
import {expect} from 'chai'

describe('User API', () => {
  const userData = {firstName: 'firstName', lastName: 'lastName'}

  it('should create new user', async () => {
    const res = await request(app).post('/api/user')
      .send(userData)

    expect(res.statusCode).to.equal(201)
    expect(res.body?.data?.firstName).to.equal(userData.firstName)
    expect(res.body?.data?.lastName).to.equal(userData.lastName)
  })

  it('should get filtered users', async () => {
    const userRes = await request(app).post('/api/user')
      .send(userData)
    const userId = +userRes.body?.data?.id
    expect(userId).to.greaterThan(0)

    const res = await request(app).get('/api/user/search')
      .query({keyword: userData.firstName})

    const filteredRows = _.filter(res.body?.data?.rows,
      (i: any) => (i.firstName?.indexOf(userData.firstName) >= 0)
        || (i.lastName?.indexOf(userData.firstName) >= 0))

    expect(res.statusCode).to.equal(200)
    expect(res.body?.data?.count).to.greaterThan(0)
    expect(res.body?.data?.rows).to.deep.equal(filteredRows)
  })

  it('should get detail user', async () => {
    const userRes = await request(app).post('/api/user')
      .send(userData)
    const userId = +userRes.body?.data?.id
    expect(userId).to.greaterThan(0)

    const res = await request(app).get(`/api/user/${userId}`)

    expect(res.statusCode).to.equal(200)
    expect(res.body?.data?.id).to.equal(userId)
  })

  it('should update existed user', async () => {
    const userRes = await request(app).post('/api/user')
      .send(userData)
    const userId = +userRes.body?.data?.id
    expect(userId).to.greaterThan(0)

    const updateUserData = {
      ...userData,
      firstName: 'firstName_updated',
      lastName: 'lastName_updated'
    }
    const res = await request(app).put(`/api/user/${userId}`)
      .send(updateUserData)

    expect(res.statusCode).to.equal(200)
    expect(res.body?.data?.id).to.equal(userId)
    expect(res.body?.data?.firstName).to.equal(updateUserData.firstName)
    expect(res.body?.data?.lastName).to.equal(updateUserData.lastName)
  })

  it('should delete existed user', async () => {
    const userRes = await request(app).post('/api/user')
      .send(userData)
    const userId = +userRes.body?.data?.id
    expect(userId).to.greaterThan(0)

    const res = await request(app).delete(`/api/user/${userId}`)
    expect(res.statusCode).to.equal(200)
    expect(res.body?.data).to.equal(true)
  })
})
