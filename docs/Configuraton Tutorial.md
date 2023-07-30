# Ionic-Tutorial-COMP2068

## Configuration guide for starting an Ionic project

### 1. Prerequisites

- Build-in Terminal app
- Code Editor
- Node.js & npm
- Git
- Angular CLI
- A basic understanding of Angular and TypeScript

### 2. Install Ionic

Ionic provides a command-line interface tool to help you build Ionic apps. Install the CLI with npm:

`npm install -g @ionic/cli`

### 3. Developing with Ionic

#### 3.1. Create an Angular based Ionic project

To start an Ionic project, simply run:
`ionic start`
Ionic CLI will prompt you to select a starter template for your new project.

Ionic provides several templates for you to choose from when starting a new project. The default is a blank project, but you can also choose from the following:

- tabs: A tabs based layout
- sidemenu: A sidemenu based layout
- blank: An empty project with a single page

You can also see all available starter templates by running `ionic start --list`

For this project, navigate to the project directory. From there we will specify the information with command arguments:
`ionic start <project_name> <template> --type=angular`

#### 3.2 Add pages to your app

To add a new page to your app, use the following command:
`ionic generate page <page_name>`

#### 3.3 Preview your app

To preview your app locally on web browser, run in your project directory:
`ionic serve`


### Extras

[UI components](https://ionicframework.com/docs/components)

[Generate Ionic project visually](https://ionicframework.com/start#basics) 

## References

[Introduction to Ionic](https://ionicframework.com/docs/)