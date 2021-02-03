<h1 align="center">
  :books: Simple CRUD with React Native
</h1>

<p align="center">
  <a href="#trophy-lessons-learned">Lessons Learned</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies--resources">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-setting-up-the-environment">Environment Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-features">Features</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=000000&color=8257e5&label=created%20at&message=Jan%202021" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/studying-react-native-crud?label=updated%20at&labelColor=000000&color=8257e5" alt="Update Date" />

  <img src="https://img.shields.io/github/v/tag/juliolmuller/studying-react-native-crud?label=latest%20version&labelColor=000000&color=8257e5" alt="Latest Version" />

  <img src="https://img.shields.io/static/v1?labelColor=000000&color=8257e5&label=PRs&message=welcome" alt="Pull Requests Welcome" />

  <img src="https://img.shields.io/github/license/juliolmuller/studying-react-native-crud?labelColor=000000&color=8257e5" alt="Project License" />
</p>

![Application snapshot](./src/images/app-overview.jpg)

Application developed as an assignment to college, subject Development for Mobile Devices, at UFPR, in order to learn building **React Native** applications. The project seeks to apply knowledge in functional components, screens navigation, Context API and reducers; This application is fully offline (no external data fetching).

The intent was to create a simple notes application with CRUD operations (create, read, update & delete) to explore the React API in mobile devices environment. We should have a screen to display a list of existing notes, feature to delete notes and features to see/edit new or existing notes in another screen. The state should be managed by **React Context API** and changes dispatched to a reducer.

## :trophy: Lessons Learned

- Build a swipeable component;
- React Native Navigation (stack mode);
- React Context API (including `useContext` hook);
- `useReducer` hooks to dispatch actions;
- Babel plugin `jsx-control-statements`!!! AWESOME 😍

## :rocket: Technologies & Resources

**Frontend:**
- React Native
- Expo Framework

**Development:**
- Visual Studio Code
- NPM routines

## :hammer: Setting up the Environment

Make sure to have **Node.js 10+** installed in your machine and its **npm** available in the command line, then use the following routines:

```bash
$ npm install   # download all dependencies
$ npm start     # run development server
```

## :zap: Features

- [x] List all existing notes;
- [x] Delete a note by swiping left/right;
- [x] Create new note with title and body; and
- [x] Editing existing note.
