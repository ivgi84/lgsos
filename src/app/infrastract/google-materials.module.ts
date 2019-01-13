import { NgModule } from '@angular/core';

import { MatInputModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatRadioModule, MatSidenavModule, MatTabsModule, MatExpansionModule, MatListModule, MatTooltipModule, MatSliderModule, MatSelectModule } from '@angular/material';

const modulesList = [
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
    MatSelectModule
]

@NgModule({
  imports: modulesList,
  exports: modulesList
})
export class GoogleMaterialsModule { }
