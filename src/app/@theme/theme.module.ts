import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components/navbar/navbar.component";

@NgModule({
	declarations: [
		NavBarComponent,
	],
	providers: [],
    exports: [
        NavBarComponent
    ]
})
export class ThemeModule { }
