import { Directive, HostListener, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({ selector: '[textFormatter]' })
export class TextFormatterDirective implements OnInit {

    private el: HTMLInputElement;

    @Output() ngModelChange = new EventEmitter();

    constructor(
        private elementRef: ElementRef,
    ) {
        this.el = this.elementRef.nativeElement;
    }

    ngOnInit() {
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event) {
        const e = event as KeyboardEvent;
        const current = this.el.value || '';

        if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39) ||
            (e.keyCode >= 96 && e.keyCode <= 105)) {
            // let it happen, don't do anything
            return;
        }

        const pattern = /[A-Za-z]/g;
        const regEx = new RegExp(pattern);
        const ch = e.keyCode === 190 ? '.' : String.fromCharCode(e.keyCode);
        const next = current.concat(ch);

        if (e.key !== '' && regEx.test(next)) {
            return;
        }

        e.preventDefault();
    }
}
