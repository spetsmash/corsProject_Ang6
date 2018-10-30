import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;


  constructor(public shoppingListService: ShoppingListService) { }

  onAddItem(form: NgForm) {
    // this.shoppingListService.addIngredient(
    //   new Ingredient(
    //     this.nameInputRef.nativeElement.value,
    //     this.amountInputRef.nativeElement.value
    //   ));

    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnInit() {
  }

}
