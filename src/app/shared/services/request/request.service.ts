import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from 'src/app/config/config';
import { makeParamsFromFormData } from '../../utils/helper';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private httpClient: HttpClient,
    private config: Config) {
}


private makeUrl(url) {
    return this.config.getConfig('server') + url;
}

sendRequest(url, type, formData: any = {}) {

    const apiUrl = this.makeUrl(url);
    console.log(apiUrl);
    const params = makeParamsFromFormData(formData || {});
    switch (type.toLowerCase()) {
        case 'get':
            return this.httpClient.get(apiUrl, { params: params });
        case 'post':
            return this.httpClient.post(apiUrl, formData);
        case 'put':
            return this.httpClient.put(apiUrl, formData);
        case 'patch':
            return this.httpClient.patch(apiUrl, formData);
        case 'delete':
            return this.httpClient.delete(apiUrl, { params: params });
        case 'delete_with_body':
            const header: HttpHeaders = new HttpHeaders()
            const httpOptions = {
                headers: header,
                body: formData
            };
            return this.httpClient.delete(apiUrl, httpOptions);
    }
}

}
