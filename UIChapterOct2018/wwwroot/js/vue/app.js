class DrugSearchClient {
    static search(ndc) {
        return fetch(`http://localhost:59467/ndc/${ndc}`)
            .then(r => r.json());            
    }
}

const app = new Vue({
    el: '#app',
    data: {
        ndc: null,
        results: [],
        error: null
    },
    methods: {
        search() {
            DrugSearchClient.search(this.ndc)
                .then(response => {
                    if (response.found) {
                        this.results.unshift(response);
                        this.ndc = null;
                    } else {
                        this.error = `${this.ndc} was not found...`;
                    }
                });
        }
    }
});