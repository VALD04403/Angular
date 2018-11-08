import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

@HostBinding('style.backgroundColor') myBackgroundColor:string;

	constructor() { }

	ngOnInit(){
		//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
	}

	@HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
		this.myBackgroundColor= 'BurlyWood';
	}

	@HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
		this.myBackgroundColor= 'transparent';
	}
}
