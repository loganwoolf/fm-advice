# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Click the button and receive a random piece of advice from a public API.

### Screenshots

- Desktop view:

![Desktop View](/src/images/advice_desktop.png)

- Mobile view:

![Mobile View](/src/images/advice_mobile.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://loganwoolf.github.io/fm-advice/](https://loganwoolf.github.io/fm-advice/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- `create-react-app`

### What I learned

- Use JS to target effects to input type. CSS `:hover` pseudo-selector triggers on touch, and never releases and we don't want that!

```jsx

  const addHoverEffect = (e) => {
    e.target.classList.add("button-hover");
  };
  const removeHoverEffect = (e) => {
    e.target.classList.remove("button-hover");
  };

  return (
    <button
      onMouseEnter={addHoverEffect}
      onMouseLeave={removeHoverEffect}
    >
  )
```

- Load an SVG as a React component
```js
  import { ReactComponent as Icon } from "../images/icon-dice.svg";
```
```jsx
  return (
    <button>
      <Icon>
    </button>
  )
```

### Continued development

- Need to find a way to make the App resize smoothly when loading new advice text.

## Author

- Website - [Logan Woolf](https://loganwoolf.github.io)
- Frontend Mentor - [@loganwoolf](https://www.frontendmentor.io/profile/loganwoolf)
- Twitter - [@logan__woolf](https://www.twitter.com/logan__woolf)
