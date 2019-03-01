import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/employees/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/employees`).then(e => e.json())
  }
}