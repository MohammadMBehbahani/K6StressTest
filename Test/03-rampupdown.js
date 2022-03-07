import http from 'k6/http'

export let options = {
    stages: [
        { duration: '10s', target: 5 }, // 5 users for 10s
        { duration: '20s', target: 3 }, // again 3 users for 20s
        { duration: '20s', target: 0 } // again 3 users for 20s
    ],
    //vus: 10, duration:'1m3s'
}

export default function () {
    http.get('https://www.google.com');
    http.get('https://www.wikipedia.com');
}