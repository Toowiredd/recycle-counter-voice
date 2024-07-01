import { mutation } from "./_generated/server";

export default mutation(async ({ db }, { id }) => {
  await db.patch(id, { count: 0 });
});