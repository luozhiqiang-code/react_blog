"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/list", controller.home.list);
  router.get("/default/index", controller.default.home.index);
  router.get("/default/getArticleList", controller.default.home.getArticleList);
  router.get(
    "/default/getArticleById/:id",
    controller.default.home.getArticleById
  );
  router.get("/default/getTypeInfo", controller.default.home.getTypeInfo);
  router.get("/default/getListById:id", controller.default.home.getListById);

  router.post("/admin/checkLogin/", controller.admin.main.checkLogin);
  router.get("/admin/getArticleList/", controller.admin.main.getArticleList);
  router.post("/admin/addArticle/", controller.admin.main.addArticle);
  router.get("/admin/getListBBD/", controller.admin.main.getListBBD);
  router.post("/admin/addBBD/", controller.admin.main.addBBD);
  router.get("/admin/getListBBD/", controller.admin.main.getListBBD);
  router.get("/admin/getArticleById/:id", controller.admin.main.getArticleById);
  router.get("/admin/delArticle/:id", controller.admin.main.delArticle);
};

// module.exports = (app) => {
//   require("./router/default")(app);
//   require("./router/admin")(app);
// };
