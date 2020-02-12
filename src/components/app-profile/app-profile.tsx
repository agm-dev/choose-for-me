import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {

  @Prop() categories;
  @Prop() categoryChangeHandler;

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Settings:</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          You can edit here the items for each category:
        </p>

        {this.categories.map((category, index) => (
          <ion-item key={index}>
            <ion-label position="stacked">{category.name.toUpperCase()}</ion-label>
            <ion-input
              value={category.items.join(', ')}
              onInput={(event) => this.categoryChangeHandler(event, category.name)}
            ></ion-input>
          </ion-item>
        ))}

      </ion-content>
    ];
  }
}
