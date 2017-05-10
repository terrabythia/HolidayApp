
export default class {


    _calculateSignature(url) {
        return '';
    }

    fetch(method, url, body = {}, params = null) {

        // later maybe with await?
        return new Promise((resolve, reject) => {
            try {
                let data = {
                    method: method,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                };

                if (body && 'get' != method.toLowerCase()) {
                    data.body = JSON.stringify(body);
                }

                if (params && Object.keys(params).length > 0) {
                    url = url + '?' + Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
                }

                return fetch(url, data)
                    .then((response) => {
                        return response.json();
                    })
                    .then((responseJson) => {
                        resolve(responseJson);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            }
            catch(error) {

                reject(error);

            }
        });

    }

    get(url, params = null) {
        return this.fetch('get', url, null, params);
    }

    post(url, body = {}, params = null) {
        return this.fetch('post', url, body, params);
    }

    put(url, body = {}, params = null) {
        return this.fetch('put', url, body, params);
    }

    delete(url, body = {}, params = null) {
        return this.fetch('delete', url, body, params);
    }


}
