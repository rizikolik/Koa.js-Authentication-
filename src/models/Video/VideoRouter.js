const Router = require("@koa/router");
const passport = require("passport");

const {
  getAllVideos,
  creteNewVideo,
  findVideoWithId,
} = require("./VideoController");
//MiddleWare for Auth at every Route
const requireLogin = require("../../middleware/requireLogin");
//Adding api to every video route
const router = new Router({ prefix: "/api" });

//Wil be used for 2 route :get witthout query and  get with aspect ratio
router.get("/videos", async (ctx, next) => {
  await requireLogin(ctx, next), getAllVideos(ctx);
});
router.post("/videos", async (ctx, next) => {
  await requireLogin(ctx, next), creteNewVideo(ctx);
});

router.get("/videos/:video_id", async (ctx, next) => {
  await requireLogin(ctx, next), findVideoWithId(ctx);
});

module.exports = router;