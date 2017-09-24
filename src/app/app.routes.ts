import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';
import {CssgridComponent} from './components/cssgrid/cssgrid.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent // CssgridComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'details',
        component: UserDetailsComponent
    }
]