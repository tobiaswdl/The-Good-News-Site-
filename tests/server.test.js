const request = require('supertest');
const app = require('../server');

describe('Server Routes', () => {
    // Test: GET /
    it('should return 200 for the home route', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('The Good News Page');
    })

    // // Test: Get /UserNews 
    // it('should return 200 for /UserNews', async () => {
    //     const response = await request(app).get('/UserNews');
    //     expect(response.statusCode).toBe(200);
    // }) 

    // Test: Post /UserNews (without auth code)
    it('should return 401 if secret code is missing or incorrect', async () => {
        const response = await request(app)
            .post('/UserNews')
            .send({ title_of_post: 'Test Title', content: 'Some content'});
        expect(response.statusCode).toBe(401);
        expect(response.text).toContain('Unauthorized');
    })
})