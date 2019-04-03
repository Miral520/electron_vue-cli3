<template>
    <div id="app">
      <el-scrollbar style="height:100%">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/>
      </el-scrollbar>
    </div>
</template>

<script src="./App.js"></script>

<style lang="less">
  @import './public.less';
  @import './App.less';
</style>
