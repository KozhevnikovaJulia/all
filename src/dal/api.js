import Axios from 'axios';

export const API = {
  getIp() {
    return Axios.get('https://videotron.mediainstinctgroup.ru/get_ip/');
  },
};
