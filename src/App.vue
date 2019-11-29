<template>
    <div id="app">
        <p>Home Page</p>
        <nav>
            <router-link to="/">首页</router-link>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>
