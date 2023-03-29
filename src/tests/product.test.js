const request = require('supertest');
const app = require('../app.js');
const ProductImg = require('../models/ProductImg')
require('../models')

let token;
let productId;

beforeAll(async() => {
    const credentials = {
        email: "Pain.24021@gmail.com",
        password: "teamorin"
    }
    const res = await request(app).post('/users/login').send(credentials)
    token = res.body.token;
})

test("POST /products should create a product", async() => {
    const newProduct = {
        title: "Sansung s2",
        description: "el mejor y mas lindo del mundo",
        price: 80.0,
        // categoryId: 1
    }
    const res = await request(app).post('/products').send(newProduct)
    .set('Authorization', `Bearer ${token}`);
    productId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.title).toBe(newProduct.title)
})

test("GET /products should return all products", async()=>{
    const res = await request(app).get('/products');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].category).toBeDefined();
});

test("GET /products/:id should get one products", async() => {
    const res = await request(app).get(`/products/${productId}`)
    expect(res.status).toBe(200)
});

test("PUT /products/:id should update one product", async() => {
    const update = {
        title: "x2"
    }

    const res = await request(app).put(`/products/${productId}`).send(update)
    .set('authorization', `Bearer ${token}`);
    expect(res.status).toBe(200)
    expect(res.body.title).toBe(update.title);
});

test("DELETE /products/:id should delete one product", async() => {
    const res = await request(app).delete(`/products/${productId}`)
    .set('authorization', `Bearer ${token}`);
    expect(res.status).toBe(204)
});

// test("POST /products/:id/images should create one product-image", async() => {
//     const image = await ProductImg.create({url: "cualquierCosa", filename: "xCosa"});
//     const res = await request(app)
//         .post(`/products/${productId}/images`)
//         .send([image.id])
//         .set('authorization', `Bearer ${token}`);
//         await image.destroy();
//     expect(res.status).toBe(200);
//     expect(res.body).toHaveLength(1);

// })
