import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	User = {
		name : 'Doe',
		firstName : 'John',
		age : 25,
		quote : 'Hi !',
		photo : 'https://vignette.wikia.nocookie.net/rokh/images/f/f0/Utilisateur.png/revision/latest?cb=20170630135107&path-prefix=fr',
		

	};
bool: boolean;
	constructor() { 
	}

	ngOnInit() {
		this.bool = true;
	}
     hide(){
	this.bool = !this.bool;
}
}