import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  constructor() {
    this.categoryChangeHandler = this.categoryChangeHandler.bind(this);
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

  categoryChangeHandler(event, name: string) {
    console.log(name, event.target.value);
    console.log(this.state.categories);
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
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home"  componentProps={{ categories: this.state.categories }} />
          <ion-route url="/settings" component="app-profile" componentProps={{ categories: this.state.categories, categoryChangeHandler: this.categoryChangeHandler }} />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
