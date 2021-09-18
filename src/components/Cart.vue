<script setup>
defineProps({
  pais: Object,
  key: Number
})
</script>

<template>
  <div class="cart" :key="key">
    <img :src="pais.flag" :alt="pais.name" />
    <div class="information">
      <h2>{{ pais.name }}</h2>
      <p>
        <strong>Population:</strong>
        {{ new Intl.NumberFormat().format(pais.population) }}
      </p>
      <p>
        <strong>Region:</strong>
        {{ pais.region }}
      </p>
      <p>
        <strong>Capital:</strong>
        {{ pais.capital }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.cart {
  width: 20rem;
  height: 25rem;
  background-color: #ffff;
  border-radius: 5px;
  overflow: hidden;
}

.information {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

img {
  width: 100%;
}

h2 {
  color: black;
}

p {
  margin: 0.5rem 0;
}
</style>
