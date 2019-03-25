<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">{{ test }}</div>

                    <div class="panel-body">
                        <router-link to="/users/test">test</router-link>
                        <br><br/>
                        <button v-on:click="goBack">
                            Terug
                        </button>
                        <router-view/>
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
                test: 'User page',
            }
        },
        methods: {
            goBack () {
                (window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/'))
            },
        },
        computed: {

        }
    }
</script>
