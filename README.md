# nuxt-todo-app

## Overview
It will be a simple todo application using a library that is compatible with nuxt.

## Demo
!!gif URL



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

```

1. Install npm packages.
```bash
# npm
npm install
```

1. Set up prisma.  
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

gmail:  
twitter:  


## License
The source code is licensed MIT.





# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
