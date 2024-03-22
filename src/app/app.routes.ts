import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./auth/auth.routes").then((m) => m.AUTH_ROUTES),
  },
  {
    path: "success",
    loadChildren: () =>
      import("./success/success.routes").then((m) => m.SUCCESS_ROUTES),
  },
  { path: "**", redirectTo: "" },
];
