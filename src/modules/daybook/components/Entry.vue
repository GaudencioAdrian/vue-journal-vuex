<template>
    <!-- Como se esta dentro del template no es necesari poner el this.$router -->
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({name: 'entry', params: {id:10}})"
  >
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="mx-2 fw-light">2021,  jueves</span>
    </div>

    <div class="entry-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sequi, a aliquid, quisquam rem possimus dolore modi quidem placeat beatae fugit dolor voluptatibus illum consectetur. Unde magnam qui officia vitae!
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
//& = Toma la misma clase y aplica lo que estas poniendo despues de los puntos : eso evita poner otra vez "entry-container:hover"
    &:hover {
        background-color: lighten($color: (grey), $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description {
        font-size: 12px;
    }
}
</style>

