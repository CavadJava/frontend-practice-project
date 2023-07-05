import { Component } from '@angular/core';

@Component({
  selector: 'app-interest-picture',
  templateUrl: './interest-picture.component.html',
  styleUrls: ['./interest-picture.component.css']
})
export class InterestPictureComponent {

  message: string | undefined
  url: any | undefined
  width: number | undefined
  height: number | undefined

  constructor() {
    this.url = ""
  }

  onSelectPicture(event:any){
    var reader = new FileReader()
		reader.readAsDataURL(event.target.files[0]);
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
			this.message = "Only images are supported";
			return;
		}
    reader.onload = (_event) => {
      var img = new Image()
      img.onload = () => {
          this.width = img.width;
          this.height = img.height;
      };

			this.message = "";
			this.url = reader.result; 
      img.src = this.url
      this.message = 'upload success image'
    }
  }
}
