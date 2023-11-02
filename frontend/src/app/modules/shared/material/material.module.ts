import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatTabsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        MatIconModule,
        MatSnackBarModule,
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatTabsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        MatIconModule,
        MatSnackBarModule,
    ],
})
export class MaterialModule {}
