const request = require('supertest');
const app = require('../app.js');

let userId;
let token;

test("POST /users should create a user", async() => {
    const newUser = {
        firstName: "Konan",
        lastName: "akaztki",
        email: "Pain.2402@gmail.com",
        password: "teamorin",
        phone: "548787"
    }
    const res = await request(app).post('/users').send(newUser)
    userId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.email).toBe(newUser.email)
});

test("POST /users/login should do login", async() => {
    const user = {
        email: "Pain.2402@gmail.com",
        password: "teamorin"
    }
    const res = await request(app).post('/users/login').send(user)
    token = res.body.token;
    expect(res.status).toBe(200);
    expect(res.body.user.email).toBe(user.email);
    expect(res.body.token).toBeDefined();
});


test("GET /users should return all users", async()=> {
    const res = await request(app)
    .get('/users')
    .set('authorization', `Bearer ${token}`);
expect(res.status).toBe(200);
expect(res.body).toHaveLength(2);
})

test("PUT /users/:id should update one user", async() => {
    const update = {
        lastName: "x2"
    }

    const res = await request(app).put(`/users/${userId}`).send(update)
    .set('authorization', `Bearer ${token}`);
    expect(res.status).toBe(200)
    expect(res.body.lastName).toBe(update.lastName);
});



test("DELETE /users/:id should delete one user", async() => {
    const res = await request(app).delete(`/users/${userId}`)
    .set('authorization', `Bearer ${token}`);
    expect(res.status).toBe(204)
});
