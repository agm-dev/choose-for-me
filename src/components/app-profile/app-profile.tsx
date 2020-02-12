import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {

  constructor() {
    this.onInputHandler = this.onInputHandler.bind(this);
  }

  originalState = {
    categories: [
      {
        name: 'food',
        items: [
          'pizza',
          'hamburguer',
          'pasta',
          'taco',
          'burrito',
        ]
      },
      {
        name: 'movie genre',
        items: [
          'drama',
          'thriller',
          'terror',
          'action',
          'adventure',
        ]
      },
      {
        name: 'whatever',
        items: [
          'one',
          'two',
          'three',
        ]
      }
    ]
  };

  @State() state = this.originalState;

  onInputHandler(event, name: string) {
    console.log(name, event.target.value);
    console.log(this.state);
    const categories = this.state.categories.map(item => {
      if (item.name === name) {
        console.log(`updating ${name} category`);
        return { name, items: event.target.value.split(', ') }
      }
      return item;
    });
    this.state = { categories };
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
          You can edit here the items for each category:
        </p>

        {this.state.categories.map(category => (
          <ion-item>
            <ion-label position="stacked">{category.name.toUpperCase()}</ion-label>
            <ion-input
              value={category.items.join(', ')}
              onInput={(event) => this.onInputHandler(event, category.name)}
            ></ion-input>
          </ion-item>
        ))}

      </ion-content>
    ];
  }
}
