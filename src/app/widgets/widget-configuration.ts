const context = require.context("./dynamics", true, /\.component\.ts$/);

const CONFIGURATION = {};
context.keys().forEach(key => {
    const name = key.replace('.component.ts', '').replace('./', '');
    CONFIGURATION[name] = context(key)
});

export default CONFIGURATION;