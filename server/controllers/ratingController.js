const { Rating } = require("../models/models");
const ApiError = require("../error/ApiError");

class RatingController {
  async create(req, res) {
    const { rate, userId, deviceId } = req.body;
    const rating = await Rating.create({ rate, userId, deviceId });
    return res.json(rating);
  }

  async getAll(req, res) {
    const device = req.query.device;

    const rating = await Rating.findAll({
      where: {
        deviceId: device,
      },
    });

    return res.json(rating);
  }

  async delete(req, res) {
    const { user, device } = req.query;
    const rating = await Rating.destroy({
      where: {
        deviceId: device,
        userId: user,
      },
    });
    return res.json(rating);
  }
}

module.exports = new RatingController();
