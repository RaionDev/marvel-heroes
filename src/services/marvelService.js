
import api from './api';

export const fetchSeries = (offset = 0) => api.get('/series', { params: { offset } });
