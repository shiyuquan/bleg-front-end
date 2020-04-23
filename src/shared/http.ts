import axios, { AxiosStatic, AxiosResponse, AxiosRequestConfig } from "axios";
import { Constant } from "@/shared/constant"

export class Http {
    private constant = new Constant();
    private isDevelopment = true;
    private localhost = 'http://localhost';
    private serverHost = this.constant.serverIp;
    private port = this.constant.serverPort;
    private api = this.constant.api + this.constant.apiV1;
    private localIp = this.localhost + ':' + this.port + this.api;
    private serverIp = this.serverHost + ':' + this.port + this.api;

    public get(apiUrl: string, query?: any, option?: AxiosRequestConfig) {
        return axios.get(this.serverIp + apiUrl, { params: query, timeout: 5000 })
            .then((res) => this.handleResp(res))
            .then((res) => this.handleError(res));
    }

    public post(apiUrl: string, body?: any, query?: any, option?: AxiosRequestConfig) {
        return axios.post(this.serverIp + apiUrl, body, {
            params: query, timeout: 5000,
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => this.handleResp(res))
            .then((result) => this.handleError(result));
    }

    public put(apiUrl: string, body?: any, query?: any, option?: AxiosRequestConfig) {
        return axios.put(this.serverIp + apiUrl, body, { timeout: 5000, params: query })
            .then((res) => this.handleResp(res))
            .then((result) => this.handleError(result));
    }

    public delete(apiUrl: string, query?: any, option?: AxiosRequestConfig) {
        return axios.delete(this.serverIp + apiUrl, { params: query, timeout: 5000 })
            .then((res) => this.handleResp(res))
            .then((result) => this.handleError(result));
    }

    /**
     * 对response对处理
     * 如果服务器返回错误信息,就显示服务器的信息,否则显示请求错误
     * 
     * @param res response
     */
    private handleResp(res: AxiosResponse): { ok: boolean, data: any } {
        switch (res.status) {
            case 200:
                return { ok: true, data: res.data };
            case 302:
                return { ok: false, data: `重定向到` + res.data };
            case 400:
                return { ok: false, data: res.data ? res.data : '请求错误' };
            case 401:
                return { ok: false, data: res.data ? res.data : '请求要求用户的身份认证' };
            case 404:
                return { ok: false, data: res.data ? res.data : '不存在的资源' };
            case 413:
                return { ok: false, data: res.data ? res.data : '上传的资源体积过大' };
            case 500:
                return { ok: false, data: res.data ? res.data : '服务器内部错误，无法完成请求' };
            case 501:
                return { ok: false, data: res.data ? res.data : '服务器不支持请求的功能，无法完成请求' };
            default:
                return { ok: false, data: res.data ? res.data : '未分类的错误,status' + res.status };
        }
    }

    /**
     * error的处理方式
     * @param result 上级response处理的结果
     */
    private handleError(result: { ok: boolean, data: any }) {
        if (result.ok) {
            return result.data;
        } else {
            this.showError(result.data);
            return false;
        }
    }

    /**
     * 展示异常消息
     * @param msg 错误消息
     */
    private showError(msg: string) {
        if (this.isDevelopment) {
            alert(msg);
        } else {
            alert(msg);
        }
    }
}
