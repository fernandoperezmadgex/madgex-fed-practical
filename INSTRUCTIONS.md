## How to run de application

On the root directory type npm run dev in your terminal and the package.json will recursively start the server and the vue application for development.

## Setup

This App uses vue and tailwind for better frontend experience. Vue makes your work easy as it is reactive and has better built in tools. Tailwind allows you to develop styles fast and more modular.

## How does it work?

In the server folder, index.js file calls the deployment function exported in server.js. This deployment function gets the Manifest file created in the same server directory and using hapi Glue, composes the file and then initializes the server. The manifest.js has all the server condiguration and registred plugins. Using hapi-couture, all the plugins can be located under the lib folder and be registered in the manifest plugins section as the main plugin. This allows better organisation. The routes located on routes/index.js (which are registered as a plugin) return taxnonomy, jobsLIst and jobCount data necessary to display all the frontend required in the Mockup. Then we have the frontend side on apps/frontend, with a single view component HomePageView where all the data is retrieved from the server and then rendered with the different components located in the components folder.

## Accessibility

The App passed all the Accessibility tests in terms of color contrast, alt texts, screen reader, headings and people with visual problems.

## Design

The main change i added in the design is the filter section with the accordion closed on mobile screens. I think the user will have better experience if he can see the available jobs immediately, and then just display the filters if he wishes a more refined search. Due the size of the screen, it's better to keep things at minimum.

## Markup

In terms of markup i tried to provide meaningful html tags and good structure for the components and page layout. This approach will help in terms of accessibility and search engine indexation.
