# Vue 3 + Vite

This template should help get you get started with developing a custom preset for PrimeVue unstyled mode using Tailwind CSS.

## Custom Preset

A custom preset is configured at `src/mypreset` folder, this preset only contains an InputText component. View the [official presets](https://github.com/primefaces/primevue-tailwind/tree/main/presets) to use as your base reference.

```
mypreset/
    inputtext/
        index.js
    global.js
    index.js
```

**inputtext/index.js**
Style preset of a component should be placed in `index.js` file inside its own folder.

```js
export default {
    root: /* */
};
```

**global.js**
The global.js file can be used to add custom global styles like new animations with keyframes.

```js
export default {
    css: `
       /* Global styles */
    `,
};
```

**index.js**
The `index.js` is the main entry point of the preset that combines all component styles and exports them.

```js
import global from "./global";
import inputtext from "./inputtext";

export default {
    global,
    inputtext,
};
```

## Submit to Online Gallery

Once you are happy with your preset, please consider sharing it with the PrimeVue community at the [preset gallery](https://tailwind.primevue.org/gallery) using the [new preset form](https://github.com/primefaces/primevue-tailwind-preset-template/issues/new).
