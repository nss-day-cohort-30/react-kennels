import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/animals`).then(e => e.json())
  }
}