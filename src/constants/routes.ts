export const ROUTES = {
  ALL: "/",

  // FEED
  FEED: "/trending",
  FAVOURITE: "/favourite",
  //AUTH
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  WITH_EMAIL: "/auth-with-email",

  // USER
  USER_DETAIL: (id: string) => `/user/${id}`,

  CHAT: "chat",
};
