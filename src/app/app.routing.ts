import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Home',
        },
        runGuardsAndResolvers: 'always',
    },
    {
        path: 'tab/:id',
        component: MainComponent,
        data: {
            title: 'Page',
        },
        // runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        runGuardsAndResolvers: 'always',
        // runGuardsAndResolvers: 'paramsChange',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        data: {
            title: 'Details',
        },
        runGuardsAndResolvers: 'always',
    },
];

// export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    // imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    // imports: [ RouterModule.forRoot(routes,{enableTracing:true}) ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
