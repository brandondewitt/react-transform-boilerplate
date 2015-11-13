import request from 'superagent';

const endpoint = '/api/powerRangers';

export const find = () => {
  return new Promise((resolve, reject) => {
    request
      .get(endpoint)
      .end((err, res) => {
        if (err) { return reject(err); }
        return resolve(res.body);
      });
  });
};

export const findById = (id) => {
  return new Promise((resolve, reject) => {
    request
      .get(`${endpoint}/${id}`)
      .send({id})
      .end((err, res) => {
        if (err) { return reject(err); }
        return resolve(res.body);
      });
  });
};

export const create = (powerRanger) => {
  return new Promise((resolve, reject) => {
    request
      .post(endpoint)
      .send(powerRanger)
      .end((err, res) => {
        if (err) { return reject(err); }
        return resolve(res.body);
      });
  });
};

export const update = (powerRanger) => {
  return new Promise((resolve, reject) => {
    request
      .put(`${endpoint}/${powerRanger.id}`)
      .send(powerRanger)
      .end((err, res) => {
        if (err) { return reject(err); }
        return resolve(res.body);
      });
  });
};

export const destroy = (id) => {
  return new Promise((resolve, reject) => {
    request
      .del(`${endpoint}/${id}`)
      .end((err, res) => {
        if (err) { return reject(err); }
        return resolve(res.body);
      });
  });
};
