<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Home</div>
                    <div class="panel-body">
                        <span>Count: {{count}}</span><br><br>
                        <button v-on:click="goBack">
                            Terug
                        </button>
                        <button v-on:click="increment">Add 1 to count</button>
                        <br/><br/>
                        <span>Item with array key 4: {{items}}</span>
                        <br/><br/>
                        <span>Message saved in the store: <b>{{message}}</b></span><br>
                        <input type="text" v-model="message">

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
                (window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/'));
            },
            increment () {
                // this.$store.commit('incrementBy', {amount: 9});
                this.$store.dispatch('increment');
            }
        },
        computed: {
            count () {
                return this.$store.state.count;
            },
            items () {
                return this.$store.getters.getToDoById(4).text;
            },
            message: {
                get () {
                    return this.$store.state.message;
                },
                set (input) {
                    this.$store.commit('updateMessage', {message: input})
                }
            }
        }
    }
</script>
