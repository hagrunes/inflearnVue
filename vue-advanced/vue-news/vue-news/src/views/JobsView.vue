<template>
  <div>
    <list-item></list-item>
    <!--    <ul class="jobs-list">
      <li v-for="item in this.$store.state.jobs" :key="item.id" class="post">
        <div class="points">{{ item.points || 0 }}</div>
        <div>
          <p class="jobs-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by
            <router-link :to="`/user/${item.user}`" class="link-text">{{
              item.user
            }}</router-link>
          </small>
        </div>
      </li>
    </ul>-->
  </div>
</template>

<script>
//import axios from "axios";
//import { fetchJobsList } from "../api";
import ListItem from "@/components/ListItem";
import bus from "@/utils/bus";
export default {
  components: { ListItem },
  data() {
    return {};
  },
  created() {
    bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_JOBS")
        .then(() => {
          console.log("fetched");
          bus.$emit("end:spinner");
        })
        .catch(error => {
          console.log(error);
        });
    }, 2000);
    //getNewsList();
    // axios
    // fetchJobsList()
    //   .then(res => {
    //     this.jobss = res.data;
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>
<style scoped>
/*.jobs-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.jobs-title {
  margin: 0px;
}
.link-text {
  color: #828282;
}*/
</style>
