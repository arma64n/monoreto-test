import axios from '@/config/axios'

const site = 'stackoverflow'

export function getItems (tag) {
  return axios.get(`/search?site=${site}&order=desc&sort=activity&intitle=${tag}`)
}

export function getQuestion (id) {
  return axios.get(`/questions/${id}?site=${site}&filter=withbody`)
}

export function getAnswers (id) {
  return axios.get(`/questions/${id}/answers?site=${site}&filter=withbody`)
}

export function getAuthorLastFive (id) {
  return axios.get(`/users/${id}/questions?site=${site}`)
}

export function getTagLastFive (tag) {
  return axios.get(`/questions?site=${site}&tagged=${tag}`)
}
