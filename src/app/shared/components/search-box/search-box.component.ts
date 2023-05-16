import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  @ViewChild('txtInput')
  txtInput!: ElementRef<HTMLInputElement>
  
  @Input()
  public placeholder: string = "";

  @Output() 
  public onValue = new EventEmitter<string>();

  emitValue() : void {
    const value = this.txtInput.nativeElement.value;
    
    if ( value.length === 0 ) return;

    this.onValue.emit( value );
  }

}
