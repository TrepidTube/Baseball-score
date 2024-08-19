import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopSectionComponent } from './top-section/top-section.component';
import { ControllerComponent } from './controller/controller.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent }, // Ruta para la pantalla principal
  { path: 'controller', component: ControllerComponent } // Ruta para la pantalla de control
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule {}
export { routes };