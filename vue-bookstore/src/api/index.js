//1、引入axios,不支持jsonp，需要下载第三方jsonp库
import axios from 'axios';
//获取轮播图的数据
export function getSliders() {
  return axios.get('/api/slider');//返回的是promise对象
}
export function getHot() {
  return axios.get('/api/hot');
}
export function getBook() {
  return axios.get('/api/book');
}
