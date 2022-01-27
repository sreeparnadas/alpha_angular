import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AreaService } from 'src/app/services/area.service';
import { Area } from 'src/app/models/area.model';



@Component({
  selector: 'app-mp-level',
  templateUrl: './mp-level.component.html',
  styleUrls: ['./mp-level.component.scss']
})
export class MpLevelComponent implements OnInit {

  // items = this.cartService.getItems();

  legislativeInputForm = new FormGroup({
    id: new FormControl(null),
    personName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    areaId: new FormControl(null, [Validators.required]),
    mobile1: new FormControl(null),
    mobile2: new FormControl(null),
    voterId: new FormControl(null, [Validators.required]),
    aaharId: new FormControl(null, [Validators.required]),
  });

  areas: Area[] =[];




  mpInputForm: FormGroup;

  constructor(
    // private cartService: CartService,
    private formBuilder: FormBuilder,
    private areaService: AreaService,
  ) {
    // private cartService: CartService,


    this.mpInputForm = new FormGroup({
      id: new FormControl(null),
      personName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      mobile1: new FormControl(null, [Validators.required]),
      aadharId: new FormControl(null, [Validators.required]),
      voterId: new FormControl(null, [Validators.required]),
      userTypeName: new FormControl(null, [Validators.required]),
      areaName: new FormControl(null, [Validators.required]),
    });

   }



  ngOnInit(): void {
    this.areas = this.areaService.getArea();
    this.areaService.getGameTypeListener().subscribe((response: Area[]) => {
      this.areas = response;
      console.log('ts',this.areas);
    });
  }
  getAllArea(){
    console.log('ts');
    this.areas = this.areaService.getArea();
    this.areaService.getGameTypeListener().subscribe((response: Area[]) => {
      this.areas = response;
      console.log('ts',this.areas);      
    });
  }
  onSubmit(): void {
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    console.warn('Your order has been submitted');
    // this.checkoutForm.reset();
  }

  


}
