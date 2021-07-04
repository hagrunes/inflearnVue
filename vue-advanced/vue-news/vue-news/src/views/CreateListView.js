import ListView from "@/views/ListView";
import bus from "@/utils/bus";

export default function createListView(name) {
  console.log("name : " + name);
  return {
    // 재사용할 인스턴스옵션
    name: name,
    created() {
      bus.$emit("start:spinner");
      setTimeout(() => {
        this.$store
          .dispatch("FETCH_LIST", this.$route.name)
          .then(() => {
            console.log("this.$route.name : " + this.$route.name);
            console.log("fetched");
            bus.$emit("end:spinner");
          })
          .catch(error => {
            console.log(error);
          });
      }, 2000);
    },
    render(createElement) {
      return createElement(ListView);
    }
  };
}
