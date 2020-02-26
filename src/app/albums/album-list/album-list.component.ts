import { Component, OnInit } from "@angular/core";
import { Album } from "../album.model";
import { ALBUMS } from "../albums.data";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  albumsArray: Album[];
  title = "my-angular-albums";
  titleCounter = 1;
  numbers: number[];
  constructor() {}

  ngOnInit(): void {
    this.albumsArray = ALBUMS;
  }
  parentFunctionHandler(album) {
    alert(
      "Album " + album.album_name + " was sent from the album card component"
    );
  }
}
