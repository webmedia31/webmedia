<template>
  <section class="section">
    <p>Фильтр</p>


 <div class="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div>


    <select>
      <option value="all">Все записи</option>
      <option value="news">Новости</option>
      <option value="articles">Статьи</option>
    </select>

  </section>
</template>

<script>

export default {

  name: "portfolio",
  layout: 'default',
}
</script>
