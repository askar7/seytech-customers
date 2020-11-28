import Cookies from 'js-cookie';

export const getAccessToken = async () => await Cookies.get('token');
export const isAuthorized = () => !!getAccessToken();
