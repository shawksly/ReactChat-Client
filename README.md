# Upright Unit 7 - React Chat Client -- By Dan Bauer, Josh Krueger and Scott Hawks Lee

#### URL: N/A
#### Server Code: [https://github.com/shawksly/Unit6-Chat-Server](https://github.com/shawksly/Unit6-Chat-Server)

## Status === Complete

## Languages

JavaScript, JSX, HTML, CSS

## Pseudocode
We used our previous project's server code (linked above) for this client to communicate with. This project was built on React, Reactstrap, and Bootstrap. Users can log in, create new accounts, create, add and update chat rooms, and create, add and update messages within those rooms.

#### Flow / Description
##### Components
1. app - renders entire site, keeps track of user data
    1. navbar - renders log and logout button
        1. logout - button that renders only if user is logged in
    2. auth - renders signup or login component based on boolean variable
        1. signup - takes in user data, creates new user, stores token and sends them to display
        2. login - takes in user data, creates logs them in, stores token and sends them to display
    3. display - renders room list and room display, holds various useState variables
        1. rooms list - renders list of rooms and add room button, each room is a button that can be clicked to display that room's messages in another component, rerenders every 30 seconds, or when new user is logged in
            1. add room button - renders button that toggles modal to take in room info, rerenders rooms upon submit
        2. room display - renders room update and delete buttons, room description, and message display
            1. update room button - renders button that toggles modal to take in room update info for current room, rerenders rooms upon submit
            2. delete room button - renders button that deletes the currently displayed room, rerenders rooms
            3. messages display - renders messages, rerenders every 30 seconds and when a new room is selected each message is displayed with a username, and update and patch buttons are rendered when messages belong to that user
                1. update message button - renders icon/button that toggles modal to take in message update info for current message, rerenders messages upon submit
                2. delete message button - renders icon/button that deletes the current message, rerenders messages
            4. send message button - renders text field and button to take in new message from user, rerenders messages upon submit
    3. footer - renders footer text

# --------------------------------------------------------------------------------

# Project Instructions

# Chat - Client
The server has been created and tested throughout Postman. All endpoints should be working prior to building up our client. This way, if you are not getting the results needed while building out the front end, you know where to start debugging.

> Client --> Postman --> Server

**Reminder:**

- Is your server running?
- If it's working through Postman, check the client.
- If it's not working through Postman, check the server route.
- Don't forget to track your code using the `console log`.
- If you don't have this extension, utilize [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) when you can.
  - You can view each component, what props are being passed, and all sorts of information regarding the react build.

Your teams project should start here as the root file.

**Hint:** `npx create-react-app .`

---

## Wireframe
This is not meant to be a pixel perfect wireframe but a general layout to aim toward. As long as all the concepts of the project are utilize, feel free to use some creative design (colors, minor layout, fonts, etc) for your teams project.

[Figma React Chat](https://www.figma.com/file/sg01D9Z3HG7B4esNKqvUAM/React-Chat-Wireframe?node-id=0%3A1&t=EolhnZUCLFm9TP53-1)

---

## Data Flow

[Canva Chart](https://www.canva.com/design/DAFfJ3E5pQc/8Go3CUVUG_Q0fmNByeD0VA/edit?utm_content=DAFfJ3E5pQc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---
# Tickets
Each ticket will have a collection of items to complete. Consider when you are updating your repo to include the status of each ticket representing which portion you have accomplished.
> Example:
> The Navbar has been added to the project.
>
> git commit -m "U6_01 Navbar included"

This would assume that items prior have been completed and that the `Footer Component` has not been completed.

## Base: `#U6_01`
- Setup the base structure of the project.
- Install dependencies:Create a GitHub repository
  - Reactstrap
  - React-Router-DOM
- 
- Create Components:
  - Nav
  - Footer

**Ticket Requirements:**
- Be creative with the "Brand" name.
- Establish details of the project title within the footer (see wireframe).

## Auth: `#U6_02`
- Components to Create:
  - Auth
  - Signup
  - Login
  - Logout

**Ticket Requirements**
- There should be a swap button to allow users to either login or signup, displaying one or the other depending on what the user is needing.
- The logout button should only be displayed after a user has either logged in or signed up.

## Room: `#U6_03`
- Components to Create:
  - Display
  - Add Room
  - Update
  - Delete<>"

**Ticket Requirements**
- Room selections should be displayed within a sidebar.
- Be creative as to how you wish to display the add and update room form.
  - Consider a modal or routing to another display. 

## Message: `#U6_04`
- Display
- Add Message
- Update
- Delete

**Ticket Requirements**
- Display should be housed within the Room that has been selected by user.If the user is not an owner of the message, it should not complete the request.
  - This can be handled however your team decides.
- 

## Stretch Goals: `#U6_05`
- Include a `project-details.md` to the **root** directory.Customize styling.
  - Detail the concept of this project in pseudo code within the document.
  -  **[Pseudo Code Article](https://www.geeksforgeeks.org/how-to-write-a-pseudo-code/)**
  - 
-  Make it so that the `update` and `delete` options for a message is only available to the owner of that message.
-  Create an interval to update the rooms messages every set time frame (ex: every 30 seconds, a request is triggered.)
-  Make it so that the `update` and `delete` options for a rooms is only available to the owner of that rooms.
-  Style the room so that the newest message is posted to the bottom of the room, pushing all other messages up.
   -  Consider chat boards like Discord and how they function.

# --------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
