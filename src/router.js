import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "landing",
      component: Landing
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Contact.vue")
    },
    {
      path: "/resume",
      name: "resume",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Resume.vue")
    },
    {
      path: "/games",
      name: "games",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Games/Games.vue")
    },
    {
      path: "/games/video",
      name: "videoGames",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Games/Video.vue")
    },
    {
      path: "/games/graphic",
      name: "graphicGames",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Games/Graphic.vue")
    },
    {
      path: "/games/web",
      name: "webGames",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Games/Web.vue")
    },
    {
      path: "*",
      name: "Error",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Error.vue")
    }
  ]
});
