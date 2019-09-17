import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// tslint:disable: indent

class Hero {
	constructor(public name: string, public id: number = null) { }
}

@Component({
	selector: 'app-combo',
	templateUrl: './combo.component.html',
	styleUrls: ['./combo.component.sass']
})
export class ComboComponent implements OnInit {
	heroFormGroup: FormGroup;
	heros = [
		{ name: 'Select a hero' } as Hero,
		{ name: 'Batman', id: 1 } as Hero,
		{ name: 'Flash', id: 2 } as Hero,
		{ name: 'Arrow', id: 3 } as Hero
	];
	default: Hero;

	constructor() { this.default = this.heros[3]; }

	ngOnInit() {
		this.heroFormGroup = new FormGroup({
			hero: new FormControl('', [
				Validators.required
			])
		});

		// Simulating request delay 
		setTimeout(() => {
			this.heroFormGroup.get('hero').setValue(this.default);
		}, 1000);
	}

	submit() {

	}

	setSelectedFn(old: Hero, brandNew: Hero) {
		return old.id === brandNew.id;
	}
}
