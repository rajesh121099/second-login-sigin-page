import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ForgetComponent } from './forget/forget.component';
 import { RouterModule, ActivatedRoute } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSelectModule}  from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    ForgetComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatCardModule,MatCheckboxModule,FormsModule,MatButtonModule,MatIconModule,MatTabsModule, MatSelectModule,MatTableModule,
    // ActivatedRoute,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
        {path:'Login',component:LoginComponent},
        {path:'Signin',component:SigninComponent},
        {path:'Setting',component:SettingComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
