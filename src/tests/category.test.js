const request = require('supertest');
const app = require('../app.js');

let token;
let categoryId;

beforeAll(async() => {
    const credentials = {
        email: "Pain.24021@gmail.com",
        password: "teamorin"
    }
    const res = await request(app).post('/users/login').send(credentials)
    token = res.body.token;
})

test("POST /category should create a category", async() => {
    const category = {
        name: "tech"        
    }
    const res = await request(app).post('/categories').send(category)
    .set('Authorization', `Bearer ${token}`);
    categoryId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(category.name)
});

test("GET /categories should return all categories", async()=> {
    const res = await request(app)
    .get('/categories')
expect(res.status).toBe(200);
expect(res.body).toHaveLength(1);
})


test("DELETE /categories/:id should delete one category", async() => {
    const res = await request(app).delete(`/categories/${categoryId}`)
    .set('authorization', `Bearer ${token}`);
    expect(res.status).toBe(204)
});