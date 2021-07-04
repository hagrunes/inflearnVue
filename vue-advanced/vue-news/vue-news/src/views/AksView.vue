<template>
  <div>
    <list-item></list-item>
    <!--    <ul class="ask-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        &lt;!&ndash;        포인트영역&ndash;&gt;
        <div class="points">{{ item.points }}</div>
        <div>
          <p class="ask-title">
            <router-link :to="`item/${item.id}`" class="link-text">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by
            <router-link :to="`item/${item.user}`" class="link-text">{{
              item.domain
            }}</router-link>
          </small>
        </div>
      </li>
    </ul>-->

    <!--    <div v-for="item in fetchedAsk" :key="item.id">
      &lt;!&ndash;      <a :href="item.url">&ndash;&gt;
      &lt;!&ndash;        {{ item.title }}&ndash;&gt;
      &lt;!&ndash;      </a>&ndash;&gt;
      <router-link :to="`item/${item.id}`">
        {{ item.title }}
      </router-link>
    </div>-->
  </div>
</template>

<script>
//import axios from "axios";
// import { fetchAskList } from "../api";
// import { mapGetters } from "vuex";
import ListItem from "@/components/ListItem";
import bus from "@/utils/bus";

export default {
  components: { ListItem },
  data() {
    return {};
  },
  computed: {
    // ...mapGetters(["fetchedAsk"])
    // ...mapState({
    //   ask: state => state.ask
    // })
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_ASK")
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
    // fetchAskList()
    //   .then(res => {
    //     this.asks = res.data;
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>

<style scoped>
/*.ask-list {
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
.ask-title {
  margin: 0px;
}
.link-text {
  color: #828282;
}*/
</style>
