import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { subscriptSizing: 'dynamic' },
        },
    ],

    declarations: [],
    imports: [CommonModule],
})
export class CustomMaterialModule {}
