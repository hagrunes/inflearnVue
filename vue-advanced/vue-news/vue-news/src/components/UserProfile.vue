<template>
  <div class="user-container">
    <div>
      <i class="fas fa-users"></i>
    </div>
    <div class="user-description">
      <!--      <div>username : {{ info.id }}</div>-->
      <slot name="username"></slot>
      <div class="time">
        <!--        time : {{ info.time_ago }}-->
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userProfile",
  props: {
    info: Object
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-users {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
