<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Error 404</div>

                    <div class="panel-body">
                        <button v-on:click="goBack">
                            Terug
                        </button>
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
        },
        computed: {

        }
    }
</script>
