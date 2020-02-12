import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

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

  @State() state;

  constructor() {
    this.setCategories = this.setCategories.bind(this);
    const stored = localStorage.getItem('app-state');
    this.state = stored ? JSON.parse(stored) : this.originalState;
  }

  setCategories(categories) {
    console.log('saved categories');
    this.state = { ...this.state, categories };
    localStorage.setItem('app-state', JSON.stringify(this.state));
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home"  componentProps={{ categories: this.state.categories }} />
          <ion-route url="/settings" component="app-profile" componentProps={{ categories: this.state.categories, setCategories: this.setCategories }} />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
