<template>
  <div class="wallpaper content">
    <div class="spotlight">
      <h1 data-spotLight="LLLLLLLLLLZ">LLLLLLLLLLZ</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      towhere: this.$store.state.userpassword === this.$store.state.password? "/beauty111" : "/login"
    }
  }
}
</script>

<style>
  @import url('~assets/css/spotlight.css');

  .home .wallpaper {
    background-image: url("~assets/img/homewallpaper.jpg");
    height: 40rem;
    background-position-y: -17rem;
    /* background-position-x: 5rem; */
    background-repeat: no-repeat;
    background-size: 100% 57rem ;
    text-align: center;
    margin-bottom: -1px;
  }
  .home .wallpaper .spotlight {
    display: none;
  }
  @media screen and (max-width:768px) {
    .home .wallpaper {
      height: 20rem;
      background-image: none;
    }
    .home .wallpaper .spotlight {
    display: flex;
    height: 20rem;
    }
  }
</style>