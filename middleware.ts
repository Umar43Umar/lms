import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
  publicRoutes: ["/api/uploadthing", "/api/webhook", "/webhook"]
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
 