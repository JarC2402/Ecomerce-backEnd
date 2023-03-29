const request = require('supertest');
const app = require('../app.js');
require('../models')

let token;
let cartId;

beforeAll(async() => {
    const credentials = {
        email: "Pain.24021@gmail.com",
        password: "teamorin"
    }
    const res = await request(app).post('/users/login').send(credentials)
    token = res.body.token;
})

test("POST /cart should create a cart", async() => {
    const newcart = {
        quantity: 1
    }
    const res = await request(app).post('/cart').send(newcart)
    .set('Authorization', `Bearer ${token}`);
    cartId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.quantity).toBe(newcart.quantity)
})

test("GET /cart should return all cart", async()=>{
    const res = await request(app).get('/cart')
    .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].userId).toBeDefined();
    expect(res.body[0].productId).toBeDefined();
});


test("PUT /cart/:id should update one cart", async() => {
    const update = {
        quantity: 2
    }

    const res = await request(app).put(`/cart/${cartId}`).send(update)
    .set('authorization', `Bearer ${token}`);
    expect(res.status).toBe(200)
    expect(res.body.quantity).toBe(update.quantity);
});

test("DELETE /cart/:id should delete one cart", async() => {
    const res = await request(app).delete(`/cart/${cartId}`)
    .set('authorization', `Bearer ${token}`);
    expect(res.status).toBe(204)
});