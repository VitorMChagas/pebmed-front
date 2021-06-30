import { api } from "./api";

export const OfferService = {
  list: () => api.get('/offer')
}