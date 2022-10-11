import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
   <div  *ngIf="temErro()"class="p-message p-message-error">
    {{text}}
        </div>

  `,
  styles: [`
    .p-messagem-error {
      margin:0;
      margin-top: 4px;
      padding: 3px;
    }
  `
  ]
})
export class MessageComponent  {

@Input() erro:string = "";
@Input() control: any;
@Input() text:string = "";

temErro(): boolean {
  return this.control.hasError(this.erro) && this.control.dirty;
}
}
