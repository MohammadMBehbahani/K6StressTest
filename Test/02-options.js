//https://www.google.com/

import http from 'k6/http'

export let options = {
    vus:10,
    duration: '10s' //1m2s
}
//main function where user will be spread
export default function(){
    http.get('https://www.google.com/');
    //k6 run test/01-script.js
    // k6 run --vus 10 --duration 10s test/01-script.js
}