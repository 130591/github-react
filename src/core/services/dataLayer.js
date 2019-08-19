import api from "./index";

class DataLayer {
  static async overview() {
    const resp = await api.get("");

    return resp;
  }

  static async repositories() {
    const resp = await api.get("");

    return resp;
  }

  static async stars() {
    const resp = await api.get();

    return resp;
  }

  static async projects() {
    const resp = await api.get("");

    return resp;
  }

  static async followers() {
    const resp = await api.get("");

    return resp;
  }

  static async following() {
    const resp = await api.get("");

    return resp;
  }
}

export default DataLayer;

export class DataRepos {
  static async chooseTabs(tab) {
    if (tab === "overview") DataLayer.overview();

    if (tab === "repositores") DataLayer.repositories();

    if (tab === "stars") DataLayer.stars();

    if (tab === "projects") DataLayer.projects();

    if (tab === "followers") DataLayer.followers();

    if (tab === "following") DataLayer.following();
  }
}
