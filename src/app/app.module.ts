import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

@NgModule({
    declarations: [
        AppComponent, 
        UserComponent, 
        TasksComponent,
        TaskComponent,
        NewTaskComponent,
        CardComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule],
})
export class AppModule {

}