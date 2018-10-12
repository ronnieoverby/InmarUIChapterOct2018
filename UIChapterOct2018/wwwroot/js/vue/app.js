class DrugSearchClient {
    static search(ndc) {
        return fetch(`http://localhost:59467/ndc/${ndc}`)
            .then(r => r.json());            
    }
}

Vue.component('check-mark', {
    props: ['condition'],
    data: function () {
        return {}; // no data in this component
    },
    template: '<span v-show="condition" class="h4">✓</span>'
});

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
    },
    mounted() {
        if (localStorage.results) {
            this.results = JSON.parse(localStorage.results);
        }
    },
    watch: {
        results(newResults) {
            localStorage.results = JSON.stringify(newResults);
        }
    }
});