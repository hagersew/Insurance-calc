# Architecture

made the wizard out of the form **page-two**
uplifted the state from individual page

# Technical choice

- React
- Tailwind
- Unit Test
- storybook

---

This document describes the high-level architecture of InsuranceApp

## Big picture

---

On the highest level, **InsuranceApp** is premium insurance calculator in the form of web-application.
More specifically, the application provides user interface to input user information and calculates premium insurance.

User also provide information, such as name, age, place of residence, and insurance package.

## Code Map

---

This section talks about various important directories and data
structures.

```
root/
  |
  +-src/
      +-App.ts       // Entry point
      +-assets/      // Media content (images, icons, fonts, etc.)
      +-components/  // Shared React components
      +-features     // contains different features the app will feature

```

### `src/`

This directory contains the source code of the application itself.

### `src/assets`

Contains media content, such as images, vector icons, fonts, etc. grouped
by directory:
`src/images`, `src/fonts`, `src/icons`...

### `src/components/`

Here we store all reusable self-written components and wrappers for
third-party components, so we can use third-party components without being
bound to a specific implementation.

Also it's important to separate all reusable logic from specific component,
and store it in a related section of the `src/utils/` directory.

The component should have the following structure:

```
{ComponentName}/
    {ComponentName}.ts		             contains component definition
    ({ComponentName}.unit.test.ts)?    contains component tests (optional)
    ({ComponentName}.styles.ts)?       contains component styles (optional)
    ({fileName}.ts)*		               additional files with component-specific
								                       logic (optional)
    {interface}/
         {interfaceName.interface.ts}              contains component interface
    {storybook}/
         {componentName.stories.jsx}               contains storybook on the component
    {styles}/
         {ComponentName.css}                       contains component style

    {models}/
         {ComponentName.model.ts}                  contains components enum
```

`src/components/` directory also has the `index.ts` file with all component exports.

### `src/features/`

Here features folder contains all the feature the project will have. This way we can manage different project features.
{FeatureName}

### `src/features/featureName`

Here we have a feature. Features can use different shared components, services, assets and utils

```
{FeatureName}/
       {FeatureName}.ts contains component definition
       {__test__}/
            ({FeatureName}.unit.test.ts)? contains component tests (optional)
       {interface}/
            {interfaceName.interface.ts}              contains component interface
       {storybook}/
            {componentName.stories.jsx}               contains storybook on the component
       {styles}/
            {ComponentName.css}                       contains component style
       {models}/
            {ComponentName.model.ts}                  contains components enum
```
