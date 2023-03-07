import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui-gallery',
  templateUrl: './ui-gallery.component.html',
  styleUrls: ['./ui-gallery.component.css']
})
export class UiGalleryComponent implements OnInit{
  @Input() locationName: string | undefined;
  @Input() imageName: string | undefined;
  ngOnInit(): void {
    if (this.imageName) {
      this.imageName = "./assets/images/" + this.imageName;
    } else {
      this.imageName = "./assets/images/blue-mountains.png";
    }
  }


}
