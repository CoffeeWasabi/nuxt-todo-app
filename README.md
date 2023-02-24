# nuxt-todo-app

## Overview
It will be a simple todo application using a library that is compatible with nuxt.

## Demo
![nuxt-todo-app-demo](https://user-images.githubusercontent.com/126047210/221135694-50cc935a-610f-4fe9-a703-6e85fee9561c.gif)


## Getting Started

### Prerequisites
The following software is required to set up the project.

```npm
npm install npm@latest -g
```

```yarn
npm install -g yarn

# enter(empty)
yarn init
```

### Installation
1. Download this project or git clone it locally.
```clone command
git clone https://github.com/CoffeeWasabi/nuxt-todo-app.git
```

2. Install npm packages.
```bash
# npm
npm install
```

3. Set up prisma.  
```
# migrate
npx prisma migrate dev

# enter(empty)
? Enter a name for the new migration:

# initialize data set
yarn node --loader ts-node/esm prisma/seed.ts
```

## Usage
1. Launch the project.
```bash
npm run dev
```

2. Access  
Go to [loginURL](http://localhost:3000/login) in chrome.

3. Log in
Please log in with one of the following accounts.  
  
| No | Id | PW | Name |
| ---- | ---- | ---- | ---- |
| 1 | id001 | admin001 | Yamada One |
| 2 | id002 | admin002 | David Two |
| 3 | id003 | admin003 | Ko Three |


## Requirement
 - nuxt: 3.2.0
 - sass: 1.58.0
 - pinia: 2.0.30
 - prisma: 4.10.1
 - vee-validate: 4.7.4
 - lodash: 4.17.21
 - ts-node: 10.9.1
 - vue: 3.2.47
 - vuetify: 3.1.4


## Author
gmail:coffee.and.wasabi@gmail.com

## License
The source code is licensed MIT.
