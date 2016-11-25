import { Component,
         OnInit, AfterViewInit,
         Input, Output, EventEmitter,
         ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.scss']
})
export class ImageZoomComponent implements OnInit, AfterViewInit {
  _zoomImgUrl = '';
  @Output() zoomedOut = new EventEmitter<boolean>();
  @ViewChild('zoomImage') zoomImgRef: ElementRef;
  zoomImg: HTMLImageElement;
  closing = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zoomImg = this.zoomImgRef.nativeElement;
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
    this.zoomImg.focus();
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
