import axios from "axios";

export module planService {
  export function getAll() {
    return new Promise((resolve, reject) => {
      axios
        .get("/plans")
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}
