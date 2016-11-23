import { Component, OnInit,
         Input, Output, OnDestroy,
         ElementRef, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() interval;
  @Input() slides: Slide[];
  @ViewChild('carousel') carousel: ElementRef;

  @Output() imageZoom = new EventEmitter<string>();

  activeIndex = 0;
  slideTransitioning = false;
  preloadCache: HTMLImageElement[] = [];

  rotation;
  minHeight;

  constructor() { }

  ngOnInit() {
    this.preloadImages();
    this.calculateHeight();
    this.refreshRotation();
  }

  ngOnDestroy() {
    clearInterval(this.rotation);
  }

  refreshRotation() {
    if (this.rotation) clearInterval(this.rotation);
    this.rotation = setInterval(() => this.nextSlide(), this.interval);
  }

  preloadImages() {
    this.slides.forEach(slide => {
      let preloadImg = new Image();
      preloadImg.src = slide.imageUrl;
      this.preloadCache.push(preloadImg);
    });
  }

  slideChange() {
    this.slideTransitioning = true;
    setTimeout(() => this.slideTransitioning = false, 600);
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    this.slideChange();
  }

  changeActiveIndex(i: number) {
    this.refreshRotation();
    this.activeIndex = i;
    this.slideChange();
  }

  /**
   * Find height of image in carousel based on current screen width.
   */
  calculateHeight() {
    let imgContainer: HTMLDivElement = this.carousel.nativeElement;
    let boundingWidth = imgContainer.clientWidth;
    let img = new Image();
    img.onload = () => {
      let imgAspectRatio = img.naturalWidth / img.naturalHeight;
      let heightInContainer = boundingWidth / imgAspectRatio;
      this.minHeight = heightInContainer;
    };
    img.src = this.slides[0].imageUrl;
  }

  onResize(event) {
    this.calculateHeight();
  }

  containerClass() {
    return {
      'image-container': true,
      'page-transition': this.slideTransitioning
    };
  }

  imgClicked(imageUrl: string) {
    this.imageZoom.emit(imageUrl);
  }

}

export class Slide {

  constructor(public imageUrl: string,
              public title?: string,
              public text?: string) {
  }
}
