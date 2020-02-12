import { Component, Host, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'app-category-button',
  styleUrl: 'category-button.css',
  shadow: true
})
export class CategoryButton {

  @Prop() categories;
  @State() data;

  constructor() {
    this.selectRandomItem = this.selectRandomItem.bind(this);

    const keys = this.categories.map(item => item.name);
    this.data = keys.reduce((result, current) => ({ ...result, [current]: current }), {});
  }

  selectRandomItem(name:string) {
    console.log(`getting random item for ${name} category`);
    const items = this.categories.find(item => item.name === name).items;
    const index = Math.floor(Math.random() * items.length);
    const randomItem = items[index];
    console.log(`selected ${randomItem}`);
    this.data = { ...this.data, [name]: randomItem };
  }

  render() {
    return (
      <Host>
        <slot>
          {
            this.categories.map(item => (
              <ion-button expand="block" onClick={() => this.selectRandomItem(item.name)}>{this.data[item.name]}</ion-button>
            ))
          }
        </slot>
      </Host>
    );
  }

}
