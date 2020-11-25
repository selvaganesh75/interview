import axios from "axios";
import { buildErrFromResponse } from "../utils/utils";
import store, { history } from "../store/store";
class Service {
  service;
  constructor() {
    const service = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    const errorResponse = error.response;
    console.log(error);
    return buildErrFromResponse(errorResponse.data);
  };

  redirectTo = (document, path) => {
    document.location = path;
  };

  get = (path, options = { headers: {} }) => {
    return this.service.get(path, options).then((response) => response.data);
  };

  patch = (path, payload, header) => {
    return this.service
      .request({
        method: "PATCH",
        url: path,
        responseType: "json",
        data: payload,
        headers: header,
      })
      .then((response) => {
        return response.data;
      });
  };

  post = (path, payload, header) => {
    return this.service
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload,
        headers: header,
      })
      .then((response) => {
        return response.data;
      });
  };

  put = (path, payload, header) => {
    return this.service
      .request({
        method: "PUT",
        url: path,
        responseType: "json",
        data: payload,
        headers: header,
      })
      .then((response) => response.data);
  };

  delete = (path, payload, header) => {
    return this.service
      .request({
        method: "DELETE",
        url: path,
        responseType: "json",
        data: payload,
        headers: header,
      })
      .then((response) => response.data);
  };
}

const service = new Service();

export default service;
