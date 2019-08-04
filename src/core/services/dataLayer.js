import api from "./index";

class DataLayer {
  static async read(url) {
    const resp = await api.get(url);

    return resp;
  }
}

export default DataLayer;
