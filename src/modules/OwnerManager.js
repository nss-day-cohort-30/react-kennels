import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/owners/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/owners`).then(e => e.json())
  }
}