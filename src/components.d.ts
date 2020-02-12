/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppCategoryButton {
    'categories': any;
  }
  interface AppHome {
    'categories': any;
  }
  interface AppProfile {
    'categories': any;
    'categoryChangeHandler': any;
  }
  interface AppRoot {}
}

declare global {


  interface HTMLAppCategoryButtonElement extends Components.AppCategoryButton, HTMLStencilElement {}
  var HTMLAppCategoryButtonElement: {
    prototype: HTMLAppCategoryButtonElement;
    new (): HTMLAppCategoryButtonElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-category-button': HTMLAppCategoryButtonElement;
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
  }
}

declare namespace LocalJSX {
  interface AppCategoryButton {
    'categories'?: any;
  }
  interface AppHome {
    'categories'?: any;
  }
  interface AppProfile {
    'categories'?: any;
    'categoryChangeHandler'?: any;
  }
  interface AppRoot {}

  interface IntrinsicElements {
    'app-category-button': AppCategoryButton;
    'app-home': AppHome;
    'app-profile': AppProfile;
    'app-root': AppRoot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-category-button': LocalJSX.AppCategoryButton & JSXBase.HTMLAttributes<HTMLAppCategoryButtonElement>;
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
    }
  }
}


