﻿class DrugSearchClient {
    static search(ndc) {
        return fetch(`http://localhost:59467/ndc/${ndc}`)
            .then(r => r.json())
            .then(j => console.log(j));
    }
}

const app = new Vue({
    el: '#app',
    data: {
        search: {
            ndc: ''
        },
        results: []
    }
});