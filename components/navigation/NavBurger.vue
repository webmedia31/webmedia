<template>
  <div class="d-flex align-center">
    <span class="navbar-toogle-text">
      Меню
    </span>
    <div class="navbar-burger d-flex align-center">
      <span class="navbar-burger__line"/>
      <span  class="navbar-burger__line"/>
      <span  class="navbar-burger__line"/>
    </div>
  </div>
</template>

<style scoped>
.navbar-toogle-text {
  margin: 0px 15px;
}
.navbar-burger__line {
  width: 1px;
  background-color: #FFFCF9;
  margin: 0px 3px;
}
.navbar-burger__line:nth-child(1),
.navbar-burger__line:nth-child(3) {
  height: 16px;
}
.navbar-burger__line:nth-child(2) {
  height: 20px;
}

</style>
