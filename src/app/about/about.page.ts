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
    autoplay:true,
    slidesPerView: 'auto',
    centeredSlides:true,
    spaceBetween:15
  };

  //滑动到第二个滑块
  goToSlide(index) {
    this.slides.slideTo(index, 1000);
    console.log('swipe '+index+' is active.');
  }
  //swipe初始化完成后回调
  slideLoaded(){
    console.log('Swipe initialization.')
    this.slides.update();
  }
  //监听滑块变化事件
  slideChanged(){
    let currentSlideIndex = this.slides.getActiveIndex();
    console.log('The current slide Index is ' , currentSlideIndex);
  }
  //当点击滑块时
  slideTap(){
    
  }
  //当触摸开始时
  slideTouchStart(){
    this.slides.stopAutoplay();
  }
  //当触摸结束后
  slideTouchEnd(){
    this.slides.startAutoplay();
  }
  //页面渲染完后
  ngAfterViewInit(){
    console.log(this.slides);
  }
}
