<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  outline: none;
  border: 0;
  position: relative;
  box-sizing: border-box;
}

img {
  border: 0;
  display: block;
}

div,
p,
span,
a {
  hyphens: auto;
  overflow-wrap: break-word;
  text-decoration: none;
  white-space: normal;
  word-wrap: break-word;
}

body {
  font-family: PingFangSC, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Ubuntu, Helvetica Neue, sans-serif;
  color: rgb(32, 82, 132);
  background: #fff;
  min-width: 320px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
