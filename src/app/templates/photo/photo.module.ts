import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { HeaderModule } from './../../molecules/header/header.module';
import { MenuModule } from './../../molecules/menu/menu.module';

import { CardModule } from './../../organisms/card/card.module';
import { ImageModule } from 'src/app/atoms/image/image.module';

@NgModule({
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MenuModule,
    CardModule,
    ImageModule
  ]
})
export class PhotoModule { }
