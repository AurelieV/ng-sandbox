import {Widget1Component} from "./dynamics/widget1.component";
import {Widget2Component} from "./dynamics/widget2.component";

// Current version of webpack/angular-cli does not seems to support dynamic require

// const context = require.context("./dynamics", true, /\.component\.ts$/);

// const config = {};
// context.keys().forEach(key => {
//     const name = key.replace('.component.ts', '').replace('./', '');
//     CONFIGURATION[name] = context(key)
// });

// export const CONFIGURATION = config;


export const CONFIGURATION = {
    widget1: Widget1Component,
    widget2: Widget2Component
}