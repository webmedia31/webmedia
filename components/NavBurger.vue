<template>
  <div data-target="mobile-menu" class="sidenav-trigger">
    Меню
    <div class="navbar-burger">
      <span class="navbar-burger__line"/>
      <span  class="navbar-burger__line"/>
      <span  class="navbar-burger__line"/>
    </div>
  </div>
</template>

<style scoped>
.sidenav-trigger {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.navbar-burger {
  display: flex;
  align-items: center;
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
