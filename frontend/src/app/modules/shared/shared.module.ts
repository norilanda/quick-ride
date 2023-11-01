import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  providers: [provideNgxMask()],
  declarations: [],
  imports: [CommonModule, MaterialModule, NgxMaskDirective, NgxMaskPipe],
  exports: [MaterialModule, NgxMaskDirective, NgxMaskPipe],
})
export class SharedModule {}
