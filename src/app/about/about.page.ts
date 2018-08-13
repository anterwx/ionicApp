import { Component, ViewChild } from '@angular/core';
import { Slides, Slide } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  @ViewChild(Slides) slides: Slides;

  //slides的配置项
  slideOpts:any = {
    autoplay:true
  };

  //滑动到第二个滑块
  goToSlide() {
    this.slides.slideTo(1, 1000);
  }

  //监听滑块变化事件
  slideChanged(){
    let currentSlideIndex = this.slides.getActiveIndex();
    console.log('The current slide Index is ' + currentSlideIndex);
  }
  ngAfterViewInit(){
    console.log(this.slides);
  }
}
