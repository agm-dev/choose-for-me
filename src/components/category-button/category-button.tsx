import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-category-button',
  styleUrl: 'category-button.css',
  shadow: true
})
export class CategoryButton {

  render() {
    return (
      <Host>
        <slot>
          <p>category button works!</p>
        </slot>
      </Host>
    );
  }

}
