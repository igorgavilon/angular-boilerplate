import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./components/navbar/navbar.component";

@NgModule({
    imports: [
        RouterModule,
    ],
	declarations: [
		NavBarComponent,
	],
	providers: [],
    exports: [
        NavBarComponent,
    ]
})
export class ThemeModule { }
