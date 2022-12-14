const reviewsRouter = require("express").Router();
const {
  getReviews,
  getReviewById,
  getReviewComments,
  postReviewComment,
  postReview,
  patchReviewVotes,
  deleteReview,
} = require("../controllers/controllers");

reviewsRouter.route("/").get(getReviews).post(postReview);
reviewsRouter
  .route("/:review_id")
  .get(getReviewById)
  .patch(patchReviewVotes)
  .delete(deleteReview);
reviewsRouter
  .route("/:review_id/comments")
  .get(getReviewComments)
  .post(postReviewComment);

module.exports = reviewsRouter;
