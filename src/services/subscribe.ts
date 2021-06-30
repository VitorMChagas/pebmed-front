import api from './api';

export const SubscriptionPostService = {
  list: () => api.post('/subscription'),
};

export const SubscriptionGetService = {
  list: () => api.get('/subscription'),
};
