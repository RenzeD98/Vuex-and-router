<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Vervolg pagina</div>
                    <div class="panel-body">
                        <span>Count: {{count}}</span><br><br>
                        <button v-on:click="goBack">
                            Terug
                        </button>
                        <button v-on:click="increment">Add 1 to count</button>
                        <br/><br/>
                        <span>Message saved in the store: <b>{{message}}</b></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            goBack () {
                (window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/'))
            },
            increment () {
                this.$store.dispatch('increment');
            }
        },
        computed: {
            count () {
                return this.$store.state.count;
            },
            message () {
                return this.$store.state.message;
            }
        }
    }
</script>
