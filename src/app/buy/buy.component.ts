import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  name: string = '';
  age!: number;
  email: string = '';
  street: string = '';
  area: string = '';
  pincode: string = '';
  phone: string = '';

  onSubmit(registrationForm: any) {
    console.log('Form submitted:', registrationForm);
    this.placeOrder(); 
  }

  @Output() buyFormSubmit = new EventEmitter<any>();

  submitBuyForm(form: any) {
    this.buyFormSubmit.emit(form.value);
    form.resetForm();
  }

  placeOrder() {
    this.refreshPage();
  }

  refreshPage() {
    location.reload(); 
   
  }
}
