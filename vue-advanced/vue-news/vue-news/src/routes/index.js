import Vue from "vue";
import VueRouter from "vue-router";
// import NewsView from "../views/NewsView";
// import AksView from "../views/AksView";
// import JobsView from "../views/JobsView";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";
import createListView from "../views/CreateListView";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      path: "/news",
      name: "news",
      component: createListView("NewsView")
      // component: NewsView
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AksView")
      //component: AksView
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView")
      // component: JobsView
    },
    {
      path: "/user/:id",
      component: UserView
    },
    {
      path: "/item/:id",
      component: ItemView
    }
  ]
});
