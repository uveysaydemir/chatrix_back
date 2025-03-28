import AnalyticsService from "../services/analytics/index.js";

async function GetAnalytics(req, res, next) {
  try {
    res.json(
      await AnalyticsService.getAnalytics({
        clinic_id: req.user?._id,
        channel: req.query?.channel,
        groupBy: req.query?.groupBy,
        startDate: req.query?.startDate,
        endDate: req.query?.endDate,
      })
    );
  } catch (error) {
    next(error);
  }
}

const AnalyticsController = {
  GetAnalytics,
};

export default AnalyticsController;
