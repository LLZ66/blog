import axios from 'axios';

export function request(config) {
  let example = axios.create()
  return example(config)
}