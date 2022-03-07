import http from 'k6/http'
import { check } from 'k6'

export default function () {
    let response = http.get('https://run.mocky.io/v3/16b9b40b-4e2b-45e9-b672-23ecb10b9311');

    console.log("response body lenght " + response.body.length + " for VU = " + __VU + " ITERA=" + __ITER + "")

    check(response, {
        'is status is 200 :': (r) => r.status === 200,
        // 'is status is 200 :': (r) => r.status === 404,
        'body size is 0 bytes :': (r) => r.body.length === 0
    });
}