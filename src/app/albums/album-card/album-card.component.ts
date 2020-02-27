import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "../album.model";

@Component({
  selector: "app-album-card",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.css"]
})
export class AlbumCardComponent implements OnInit {
  @Input()
  album: Album;
  newPrice: number;

  @Output()
  albumClicked: EventEmitter<Album> = new EventEmitter<Album>();

  constructor() {}

  ngOnInit(): void {if (this.album.onSale) {
    // Apply 10% discount
    this.newPrice = this.album.price - (this.album.price * .10);
    }}
  showAlbum() {
    alert("Album selected: " + this.album.albumName);
    this.albumClicked.emit(this.album);
  }
}
