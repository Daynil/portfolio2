import { Component,
         OnInit, AfterViewInit,
         Input, Output, EventEmitter,
         ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.scss']
})
export class ImageZoomComponent implements OnInit, AfterViewInit {
  _zoomImgUrl = '';
  @Output() zoomedOut = new EventEmitter<boolean>();
  @ViewChild('zoomContainer') zoomContRef: ElementRef;
  @ViewChild('zoomImage') zoomImgRef: ElementRef;
  zoomContainer: HTMLDivElement;
  zoomImg: HTMLImageElement;
  closing = false;

  PADDING_PX = 20;
  windowHeight: number;
  windowWidth: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zoomImg = this.zoomImgRef.nativeElement;
    this.zoomContainer = this.zoomContRef.nativeElement;
  }

  getWindow(event) {
    this.windowHeight = event.currentTarget.innerHeight;
    this.windowWidth = event.currentTarget.innerWidth;
    this.calcBestFit();
  }

  @Input()
  set zoomImgUrl(zoomImgUrl: string) {
    if (!zoomImgUrl) {
      if (this._zoomImgUrl !== '') this._zoomImgUrl = '';
      return;
    }
    if (this.closing) {
      return;
    }
    this._zoomImgUrl = zoomImgUrl;
    this.calcBestFit();
    this.zoomImg.focus();
  }

  calcBestFit() {
    if (!this._zoomImgUrl) return;
    let img = new Image();
    img.onload = () => {
      let boundingWidth = this.windowWidth - this.PADDING_PX * 2;
      let boundingHeight = this.windowHeight - this.PADDING_PX * 2;
      let imgAspectRatio = img.naturalWidth / img.naturalHeight;
      if (img.naturalWidth < boundingWidth && img.naturalHeight < boundingHeight) {
        console.log('image is small enough to fit screen');
      } else {
        if (img.naturalWidth > boundingWidth) {
          let heightInContainer = Math.floor(boundingWidth / imgAspectRatio);
          if (heightInContainer > boundingHeight) {
            console.log('excess height!');
          } else {
            console.log('width adjusted, height still good');
          }
        } else {
          let widthInContainer = Math.floor(imgAspectRatio * boundingHeight);
          if (widthInContainer > boundingWidth) {
            console.log('excess width!');
          } else {
            console.log('height adjusted, width still good');
          }
        }
      }
    };
    img.src = this._zoomImgUrl;
  }

  closeZoom() {
    if (this.closing) return;
    this.closing = true;
    setTimeout(() => {
      this.zoomedOut.emit(true);
      this.closing = false;
    }, 550);
  }

  getZoomClasses() {
    return {
      'gone': !this._zoomImgUrl,
      'fade-in-transition': this._zoomImgUrl,
      'fade-out-transition': this.closing
    };
  }

}
