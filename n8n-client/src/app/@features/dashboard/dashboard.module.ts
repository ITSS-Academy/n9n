import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ContainerModule } from './containers/container.module';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, ContainerModule, SharedModule],
})
export class DashboardModule { }
