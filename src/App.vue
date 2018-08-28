<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Search</router-link> |
      <router-link to="/result">Result</router-link> |
      <router-link to="/question">Question</router-link>
    </div>
    <router-view/>
  </div>
</template>
