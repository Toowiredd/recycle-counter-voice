import { createConvexReactClient } from "convex/react";

const convex = createConvexReactClient({
  origin: process.env.NEXT_PUBLIC_CONVEX_URL,
});

export const useQuery = convex.useQuery;
export const useMutation = convex.useMutation;