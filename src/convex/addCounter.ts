import { mutation } from "./_generated/server";

export default mutation(async ({ db }) => {
  const counter = { name: "New Counter", count: 0 };
  await db.insert("counters", counter);
});