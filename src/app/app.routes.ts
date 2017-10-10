import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';
import {CssgridComponent} from './components/cssgrid/cssgrid.component';
import { ContactComponent } from './components/contact/contact.component';

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
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'details',
        component: UserDetailsComponent
    }
]