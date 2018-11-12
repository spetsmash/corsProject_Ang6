import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import {AuthService} from '../../auth/auth.service';
import {HttpEvent, HttpEventType} from '@angular/common/http';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService) {}

  ngOnInit() {}

  // onSaveData() {
  //   this.dataStorageService.storeRecipes().subscribe(
  //     (response: HttpEvent<object>) => {
  //       console.log(response.type === HttpEventType.Sent);
  //     }
  //   );
  // }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  getRecipes() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logOut();
  }

  isAuthenticated() {
   return this.authService.isAuthenticated();
  }
}
