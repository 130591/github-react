import api from "./index";

class DataLayer {
  static async overview(value) {
    const resp = await api.get(`http://api.github.com/users/${value}`);

    return resp.json();
  }

  static async repositories(value) {
    const resp = await api.get(`https://api.github.com/users/${value}/repos`);

    return resp.json();
  }

  static async stars() {
    const resp = await api.get();

    return resp.json();
  }

  static async projects(value) {
    const resp = await api.get(`https://api.github.com/users/${value}/projects`,{}, {
      Header: new Headers()
    });

    return resp.json();
  }

  static async followers() {
    const resp = await api.get("");

    return resp.json();
  }

  static async following() {
    const resp = await api.get("");

    return resp;
  }
}

export default DataLayer;

