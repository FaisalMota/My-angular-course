import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", component: AlbumListComponent }
  ];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AlbumsRoutingModule { }
