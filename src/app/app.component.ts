
import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
loginbtn:boolean;
logoutbtn:boolean;

constructor(private dataService: ApiService) {
dataService.getLoggedInName.subscribe(name => this.changeName(name));
if(this.dataService.isLoggedIn())
{
console.log("loggedin");
this.loginbtn=false;
this.logoutbtn=true
}
else{
this.loginbtn=true;
this.logoutbtn=false
}

}

private changeName(name: boolean): void {
this.logoutbtn = name;
this.loginbtn = !name;
}
logout()
{
this.dataService.deleteToken();
window.location.href = window.location.href;
}
}