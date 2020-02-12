import { Component, h } from '@stencil/core';
import { CategoryButton } from '../category-button/category-button';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Choose for me!</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to <strong>choose for me</strong>. You can select a category and I will choose a random item from that category for you! You can also edit every category items from the settings page.
        </p>

        <ion-button href="/settings" expand="block">Settings</ion-button>

        <app-category-button></app-category-button>
      </ion-content>
    ];
  }
}
