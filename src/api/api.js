import axios from '@/config/axios'

const site = 'stackoverflow'

export function getItems (tag) {
  return axios.get(`/search?key=U4DMV*8nvpm3EOpvf69Rxw((&site=${site}&order=desc&sort=activity&tagged=${tag}&filter=default`)
}

export function getQuestion (id) {
  return axios.get(`/questions/${id}?site=${site}`)
}

export function getAnswers (id) {
  return axios.get(`/questions/${id}/answers?site=${site}`)
}
