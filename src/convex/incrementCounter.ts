import { mutation } from "./_generated/server";

export default mutation(async ({ db }, { id }) => {
  const counter = await db.get(id);
  await db.patch(id, { count: counter.count + 1 });
});