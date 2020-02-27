import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";
import { NotfoundComponent } from "./notfound/notfound.component";

const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about.module").then(mod => {
        console.log("in promise loadDhildern");
        return mod.AboutModule;
      })
  },
  {
    path: "albums", // Angular 8 Notation with Promise
    loadChildren: () =>
      import("./albums/albums.module").then(mod => {
        console.log("in promise loadChildren");
        return mod.AlbumsModule;
      })
  },
  { path: "**", component: NotfoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
