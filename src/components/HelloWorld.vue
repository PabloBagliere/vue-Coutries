<script setup>
import { ref, onMounted, watch } from 'vue'
import Cart from "./Cart.vue";

import { getCoutries, getCoutriesRegion, getCoutriesSearch } from "../api/countries";

const state = ref([])
const reg = ref("")
const search = ref("")

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];


async function resetRegion() {
  state.value = await getCoutries();
  reg.value = ""
}

onMounted(async () => {
  state.value = await getCoutries();
})

watch(reg, async () => {
  if (!reg.value) return;
  state.value = await getCoutriesRegion(reg.value)
})

watch(search, async () => {
  if (search.value.length === 0) {
    const list = await getCoutries()
    if(state.value.length != list.length) {
      state.value = list;
    }
    return
  }
  if (Number(search.value)) return
  getCoutriesSearch(search.value).then((list) => {
    if(list?.status) return console.log("no encontrado")
    state.value = list
  })

})

</script>

<template>
  <main>

    <div>
      <input type="text" v-model="search">
    </div>

    <div class="conteiner_select">
      <select class="select_region" v-model="reg" placeholder="Fliter by Region">
        <option disabled value>Fliter by Region</option>
        <option v-for="(region, index) in regions" :key="index" :value="region">{{ region }}</option>
      </select>
      <button class="reset_btn" @click="resetRegion" v-if="reg">
        <img src="../assets/close_white_24dp.svg" />
      </button>
    </div>
    <div class="grid">
      <Cart v-for="(pais, index) in state" :key="index" :pais="pais" />
    </div>
  </main>
</template>

<style scoped>
.conteiner_select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.select_region {
  padding: 0.8rem;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 2px rgb(0 0 0 / 10%);
  width: 50%;
}

.reset_btn {
  padding: 0;
  border: none;
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
  background-color: red;
  cursor: pointer;
}
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
  margin: 0 1rem;
}
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
