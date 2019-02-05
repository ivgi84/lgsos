import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatRadioModule, MatSidenavModule, MatTabsModule, MatExpansionModule, MatListModule, MatTooltipModule, MatSliderModule, MatSelectModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatSidenavModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatTooltipModule,
    MatSliderModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  imports: [ CommonModule ]
})
export class GoogleMaterialsModule { }
