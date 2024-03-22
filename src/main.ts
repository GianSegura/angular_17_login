import { AppComponent } from "./app/app.component";
import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import "zone.js";

bootstrapApplication(AppComponent, appConfig).catch((err) => console.log(err));
