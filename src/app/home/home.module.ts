import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { TestPage } from './test/test.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: HomePage
    },
    {
      path: 'test',
      component: TestPage
    }])
  ],
  declarations: [HomePage,TestPage]
})
export class HomePageModule { }
