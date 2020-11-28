import Cookies from 'js-cookie';

export const getAccessToken = () => Cookies.get('token', { secure: true });
export const isAuthorized = () => !!getAccessToken();
