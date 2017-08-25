# ReactJS SSR

## Env Vars

### PORT
Which Port the will use. Default to **3000**


## Structure

```
app
│ README.md  
└─src
│ └─client
│ └─both
│ └─server
```

## Setup

...

## What is supported ?

### Isomorphic code
Any code is requireable from anywhere on server and client and will be bundled. The only exception is that code from ./src/server directory is not able to required / imported from client side code.

### CSS-Modules
CSS-Modules is supproted. **.css** & **.scss** files are supported on server and client. **Thanks to** [Mathias Vagni @Medium](https://medium.com/@mattvagni/server-side-rendering-with-css-modules-6b02f1238eb1)