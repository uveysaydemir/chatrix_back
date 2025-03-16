import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sendMessageRoutes from "./routes/agent/send_message.js";
import getChatsRoutes from "./routes/dashboard/chats/get-recent-chats.js";
import createClinicRoutes from "./routes/dashboard/clinic/create.js";
import getFreshMessagesRoutes from "./routes/agent/get_fresh_messages.js";
import getAnalytics from "./routes/dashboard/analytics/get-analytics.js";

dotenv.config();

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use("/api/agent/send_message", sendMessageRoutes);
app.use("/api/dashboard/get-recent-chats", getChatsRoutes);
app.use("/api/clinic/create", createClinicRoutes);
app.use("/api/agent/get_fresh_messages", getFreshMessagesRoutes);
app.use("/api/dashboard/analytics", getAnalytics);

app.listen(PORT, () => console.log(`🚀 Express running on port ${PORT}`));
