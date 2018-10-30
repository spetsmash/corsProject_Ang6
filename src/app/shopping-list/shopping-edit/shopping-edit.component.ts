import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

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
    this.subscription = this.shoppingListService.stertedEditing.subscribe(
      (index:  number) => {
        this.editedItemIndex = index;
        this.editMode = true;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
