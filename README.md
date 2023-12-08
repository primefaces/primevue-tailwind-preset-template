# PrimeVue Tailwind Preset Template

This template should help get you get started with developing a custom preset for PrimeVue unstyled mode using Tailwind CSS. The template provides a basic preset, an extended semantic color palette as Tailwind extensions, dark mode switch and a color palette configurator.

Once you are happy with your preset, please consider sharing it with the PrimeVue community at the [preset gallery](https://tailwind.primevue.org/gallery) using the [new preset form](https://github.com/primefaces/primevue-tailwind/issues/new?assignees=&labels=Status%3A+Needs+Triage&projects=&template=new_preset.yml&title=Preset+Name).

## Custom Preset

A custom preset is configured at `src/mypreset` folder, this preset only contains an InputText component. View the [official presets](https://github.com/primefaces/primevue-tailwind/tree/main/presets) to use as your base reference.

```
mypreset/
    inputtext/
        index.js
    global.js
    index.js
```

### inputtext/index.js

Style preset of a component should be placed in `index.js` file inside its own folder.

```js
export default {
    root: /* */
};
```

### global.js

The global.js file can be used to add custom global styles like new animations with keyframes.

```js
export default {
    css: `
       /* Global styles */
    `,
};
```

### index.js

The `index.js` is the main entry point of the preset that combines all component styles and exports them.

```js
import global from "./global";
import inputtext from "./inputtext";

export default {
    global,
    inputtext,
};
```

### tailwind.config.js

Please add documentation if your preset uses extended Tailwind utilities, for example this preset template adds semantic colors named `primary` and `surface` so that color palette can easily be changed with CSS variables. These classes can be used as;

```
bg-primary-100 hover:bg-primary-200 dark:bg-primary-800 border border-surface-200 text-surface-900
```

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
    // ...
    theme: {
        extend: {
            colors: {
                "primary-50": "rgb(var(--primary-50))",
                "primary-100": "rgb(var(--primary-100))",
                "primary-200": "rgb(var(--primary-200))",
                "primary-300": "rgb(var(--primary-300))",
                "primary-400": "rgb(var(--primary-400))",
                "primary-500": "rgb(var(--primary-500))",
                "primary-600": "rgb(var(--primary-600))",
                "primary-700": "rgb(var(--primary-700))",
                "primary-800": "rgb(var(--primary-800))",
                "primary-900": "rgb(var(--primary-900))",
                "primary-950": "rgb(var(--primary-950))",

                "surface-0": "rgb(var(--surface-0))",
                "surface-50": "rgb(var(--surface-50))",
                "surface-100": "rgb(var(--surface-100))",
                "surface-200": "rgb(var(--surface-200))",
                "surface-300": "rgb(var(--surface-300))",
                "surface-400": "rgb(var(--surface-400))",
                "surface-500": "rgb(var(--surface-500))",
                "surface-600": "rgb(var(--surface-600))",
                "surface-700": "rgb(var(--surface-700))",
                "surface-800": "rgb(var(--surface-800))",
                "surface-900": "rgb(var(--surface-900))",
                "surface-950": "rgb(var(--surface-950))",
            },
        },
    },
    // ...
};
```
