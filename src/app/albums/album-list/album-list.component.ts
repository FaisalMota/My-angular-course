import { Component, OnInit } from "@angular/core";
import { Album } from "../album.model";
import { Observable } from "rxjs";
import { AlbumService } from "../shared/album.service";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  albumsArray: Observable<Album[]>;
  title = "my-angular-albums";
  titleCounter = 1;
  numbers: number[];
  constructor(private service: AlbumService) {}

  ngOnInit(): void {
    this.getAlbums();
  }
  parentFunctionHandler(album) {
    alert(
      "Album " + album.album_name + " was sent from the album card component"
    );
  }
  getAlbums() {
    this.albumsArray = this.service.getAlbums();
  }
}
