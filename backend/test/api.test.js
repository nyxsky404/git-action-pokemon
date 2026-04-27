const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('Pokémon API Routes', () => {

  it('GET /pikachu', async () => {
    const res = await request(app).get('/pikachu');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Pikachu - Power: Thunderbolt');
  });

  it('GET /charizard', async () => {
    const res = await request(app).get('/charizard');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Charizard - Power: Flamethrower');
  });

  it('GET /bulbasaur', async () => {
    const res = await request(app).get('/bulbasaur');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Bulbasaur - Power: Vine Whip');
  });

  it('GET /squirtle', async () => {
    const res = await request(app).get('/squirtle');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Squirtle - Power: Water Gun');
  });

  it('GET /mewtwo', async () => {
    const res = await request(app).get('/mewtwo');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Mewtwo - Power: Psychic');
  });

    it('GET /sesd', async () => {
    const res = await request(app).get('/sesd');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('sesd - Power: Psychic');
  });

});