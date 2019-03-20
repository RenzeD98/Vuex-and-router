<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/subpage">Subpage</router-link>
        <router-link to="/users">Users</router-link>
    </div>
</template>

<style>
    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
        padding: 0 7px;
        border-right: 1px solid #000;
    }

    #nav a:last-child {
        border: none;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>