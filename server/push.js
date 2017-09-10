import axios from 'axios';

const API_URL = 'https://onesignal.com/api/v1';
const APP_ID = '5a63c0b6-d44b-4d65-b638-8347fec9ebca';

const codePushApi = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic NGQ1NzQ2YWUtZjlkMC00Njk5LWExYTQtNjczZmYzMTZhM2Yw"
  }
});

export const createNotification = (msg, toUsers) => {
	return codePushApi.post('/notifications', {
	  app_id: APP_ID,
	  contents: {"en": msg},
	  included_segments: ["All"]
	});
}