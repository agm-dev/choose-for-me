import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {

  @Prop() categories;
  @Prop() setCategories;
  @State() data;

  constructor() {
    this.data = this.categories;
    this.categoryChangeHandler = this.categoryChangeHandler.bind(this);
  }

  categoryChangeHandler(event, name: string) {
    console.log(name, event.target.value);
    console.log(this.data);
    const categories = this.data.map(item => {
      if (item.name === name) {
        console.log(`updating ${name} category`);
        return { name, items: event.target.value.split(', ') }
      }
      return item;
    });
    this.data = categories;
  }

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
          You can edit here the items for each category. Use <strong>comma and space</strong> as separator.
        </p>

        {this.data.map(category => (
          <ion-item>
            <ion-label position="stacked">{category.name.toUpperCase()}</ion-label>
            <ion-input
              value={category.items.join(', ')}
              onInput={(event) => this.categoryChangeHandler(event, category.name)}
            ></ion-input>
          </ion-item>
        ))}

        <ion-button expand="block" onClick={() => this.setCategories(this.data)}>Save</ion-button>

      </ion-content>
    ];
  }
}
