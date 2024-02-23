# REACT PORTALS
The project is an assignment for VectoScalar Technologies Private Limited.

## Explanation :

Portals are a powerful feature introduced in React 16 that allow components to render their content outside of the typical parent-child relationship in the DOM. With portals, developers can render a component’s content at a different DOM node, even outside the root DOM element of the application.
The primary motivation behind portals is to facilitate the creation of UI overlays, modal dialogs, tooltips, and any other scenarios where the content needs to break out of the parent component’s DOM boundaries while still maintaining the benefits of React’s component architecture.

Some common use cases where portals prove to be invaluable:

a. Modals and Dialogs: Portals are perfect for rendering modals and dialogs that overlay the rest of the application. Modals can be used to display additional information, gather user input, or confirm actions, all while keeping the UI clean and uncluttered.

b. Tooltips and Popovers: Creating tooltips and popovers often involves rendering small content that appears when users hover over or interact with specific elements. Portals make it easy to position these elements precisely relative to their triggers.

c. Toast Messages: Toast messages, which provide notifications to users, can be rendered using portals to appear at the top or bottom of the screen without disturbing the application’s layout.

d. Context Menus: Portals enable context menus to appear at the cursor position, providing a user-friendly and intuitive interface.

e. Drag-and-Drop: Implementing drag-and-drop functionality often requires moving elements outside their original container, and portals facilitate this process seamlessly.

While React portals offer great flexibility, there are some considerations and limitations to keep in mind:

a. Event Bubbling: Events emitted within a portal component do not bubble up the React component tree. This means that event handling requires special consideration when using portals.

b. DOM Order: Although portals allow rendering outside of the root element, the order of DOM nodes still matters for accessibility and CSS stacking contexts.

c. No Shadow DOM: Portals do not create Shadow DOM. This means that styles in the portal component can potentially affect the parent DOM and vice versa.

## Project Demo
<img width="1437" alt="ReactPortalsExampleImage" src="https://github.com/Amandeep-Singh-vs/REACT_PORTALS/assets/157208449/0d834dd9-87d8-43b5-8381-f89bda74eabc">


## Tech Stack

**Client:** React, CSS

## Run Locally

Clone the project

```bash
  https://github.com/Amandeep-Singh-vs/REACT_PORTALS.git
```

Go to the project directory

```bash
  For example: cd project-name
```

Install dependencies

```bash
  npm install
```

Start the client next

```bash
  npm run dev
```

## Contributing
Contributions are always welcome!
Did you find some issues with the website? Please open an issue or a pull request!
