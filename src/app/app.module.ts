import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [
        AppComponent, 
        UserComponent, 
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {

}