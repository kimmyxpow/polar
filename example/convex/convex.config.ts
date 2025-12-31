import { defineApp } from "convex/server";
import polar from "@powroom/polar/convex.config";

const app = defineApp();
app.use(polar);

export default app;
