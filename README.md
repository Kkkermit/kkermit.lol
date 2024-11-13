<img align="center" alt="Nub Bot banner" src="https://i.postimg.cc/QCfKdk7C/ts-ui-img.png">

<p align="center">
<img align="center" alt="GitHub issues" src="https://img.shields.io/github/issues/Kkkermit/jest-ts-example?style=for-the-badge"> 
<img align="center" alt="GitHub license" src="https://img.shields.io/github/stars/Kkkermit/jest-ts-example?style=for-the-badge">
<img align="center" alt="GitHub license" src="https://img.shields.io/github/forks/Kkkermit/jest-ts-example?style=for-the-badge">
</p>

<hr>

<p align="center"><strong>
TypeScript and Jest Testing Library Model
</strong></p>

<p align="center">
Built with TypeScript and using Vite as a react framework, this model helps as a starting point to start easy TS react applications and can be tested with ease using the Jest, React Testing Library & Vitest packages. Not only that, it's also been setup in order to use Tailwind CSS. 
</p>

<hr>

## Table of Contents

- [Getting-Started](#getting-started)
- [Unit-Testing](#unit-testing)
- [Using-Tailwind-CSS](#using-tailwind-css)
- [Support](#support)
- [License](#license)

<hr>

<h1 align="center"><strong>
⭐ If your a fan of this repository or have used it or any of it's code, please consider leaving us a star. It would be greatly appreciated and allows us to see if users value the our works! ⭐
</strong></h1>

<hr>

## Getting-Started

This will go through how to setup the repo in order for you to begin using it.

1.  Clone the repo `git clone https://github.com/Kkkermit/jest-ts-example.git`.
2.  Once you've cloned the repo, navigate to your terminal and then `cd` in the main folder by using `cd ts-ui-example` and install the `node_modules` with `npm i`.

    - _If installing the `node_modules` give an error, try running `npm i --force`_

3.  Once the modules have installed, you can then run the command `npm run dev`. Once ran, it will create a local host on port `5173` or if that's unavailable, `5174`. The link to the local host will be/ look like this **http://localhost:5173/**
4.  That should be it on running the repo and getting it started on a local host.

<hr>

## Adding-New-Components

- To add new pages/ components to this code, you can create a file called `<component_name>.tsx`. The `.tsx` is for the TypeScript file type as this repo/ code uses TypeScript.

- New components can then also be tested. To do this name the file `<component_name>.test.tsx`. This will recognize the file file as a `test` file and will allow it to be picked by the `jest runner`. For help with testing, please navigate to [Unit-Testing](#Unit-Testing)

<hr>

## Unit Testing

Unit testing is a core part of creating a full functioning application and allows all parts of the site to be tested. The testing library on this repo is the React Testing Library, RTL for short. This library tests whatever renders on the _"screen"_. For this, we test everything that is being rended on that screen, oppose to library's such as `enzyme` which test the functionality of the page instead of what the user sees.

- To run your unit tests, I would recommend installing `jest runner` VsCode extension or you can run the command `npm run test-all`, this however, will run all test file that `jest` finds. To run individual files, `jest runner` is required. **VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner**

- **Testing Text**

- Below is an example of how you would test a component that renders a piece of text on the page.

```tsx
function Landing() {
  return (
    <>
      <div>
        <h1>This epic ass thing was made by Kkermit</h1>
      </div>
    </>
  );
}

export default Landing;
```

- This would be the piece of code that renders the text on the screen

```tsx
import { render, screen } from "@testing-library/react";
import Landing from "./landing-page";

describe("renders learn react link", () => {
  it("renders learn react link", () => {
    render(<Landing />);
    expect(
      screen.getByText("This epic ass thing was made by Kkermit")
    ).toBeInTheDocument();
  });
});
```

- This would be how we would test that piece of text being rendered in the document.
- As you can see, we describe and test and write what we expect should happen, then we _deep render_ the screen `Landing` which has the text **"SomeThis epic ass thing was made by Kkermit"**. Because we're then expecting the text to be in the document, we can use the `RTL` function `.toBeInTheDocument()`
- That would be how we would test a piece of text, however when testing other parts like a button, we would do it differently

- **Testing Buttons**

- Below is an example of how we would test a button using `RTL`

```tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded">
      {label}
    </button>
  );
};

export default Button;
```

- This would render the button on the screen with an onClick properly. We would then test this with the code below.

```tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders button with label and handles click event", () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me" onClick={handleClick} />);

  // Check if the button is rendered with the correct label
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();

  // Simulate a click event
  fireEvent.click(buttonElement);

  // Check if the click event handler is called
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

- The `jest.fn()` function of `handleClick` is what allows us to test if the button has been called and dispatched a click. We then test this by using either `.toHaveBeenCalled()` or to be more precise, you can use `toHaveBeenCalledTime(<amount_of_times_expected)`

<hr>

## Using-Tailwind-CSS

- Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without writing custom CSS. This project is already configured to use Tailwind CSS. Below are some basic instructions and examples to help you get started.
- When using TailwindCss, you can either follow these docs: https://v2.tailwindcss.com/docs or https://tailwindui.com/components for pre built components.

- **TailwindCSS Usage**

- You can use Tailwind to make and style pretty much anything, here an example of how you would center text on a page.

```tsx
import "../styles/index.css";

function CenteredContent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-blue-600 text-4xl">Centered Content</h1>
    </div>
  );
}

export default CenteredContent;
```

- Here another example of how would use TailwindCSS in order to style a button.

```tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded">
      {label}
    </button>
  );
};

export default Button;
```

- There's some examples of how you would use Tailwind in your project, but it's always more beneficial to read docs to learn for yourself.

<hr>

## Support

Connect with us on [Discord](https://discord.gg/xcMVwAVjSD) for support / any related inquiry.

<hr>

## License

Released under the terms of [MIT License](https://github.com/Kkkermit/Testify/blob/main/LICENSE) license.
