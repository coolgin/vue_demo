import router from "@/router";
//permission.ts 文件 内容
// 路由切换之前触发
router.beforeEach((to, from, next) => {
  next();
});

// 路由切换完成后触发
router.afterEach(() => {});
