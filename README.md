# Beer Gallery application with MEAN Stack.
Beer gallery application is a basic MEAN Stack application developed for demonstrating the concept of MEAN Stack, built from scratch.

##Prerequisites
In order to successfully follow this tutorial, you must install the following prerequisites, please take a look at an installation guide mentioned on the provided links:
- [Git](http://git-scm.com/)
- [Node.js](http://git-scm.com/)
- [MongoDB](http://www.mongodb.org/)

** If you want to see just the AngularJs part, you will need to use [http-server](https://github.com/indexzero/http-server) module to create a server.

##Guideline
This tutorial has been made step by step. You could check out at any point of the tutorial using a git command:

```
git checkout -f step-x
```

where `x` is the number of the step, between 0-10, that you want to check out. Here is a detail of each step:

###Step-0 - Bootstrap BeerGallery project
- Preparing all dependencies using `bower.json`
- Preparing js and css files

###Step-1 - Setup a homepage using Bootstrap library
- Setup a homepage
- Include custom bootstrap

###Step-2 - Bootstrap AngularJs application
- Create a bg module
- Create a BeerController
- Add `ng-app`, `ng-strict-di`, and `ng-controller` to the body tag

###Step-3 - Prepare all routes for Single Page Application
- Include `ngRoute` module
- Create all routes and partials html
- Update all links using SPA instead of static links

###Step-4 - Add Beer service for fetching data from a JSON file and display data using AngularJs directives
- Add a Beer service in order to get the `beer.json` file
- Display beer using `ng-repeat`

###Step-5 - Add beer insert system
- Add a new function to handle inserting new beer
- Change UI to `clearfix` using `ng-repeat`

###Step-6 - Add beer update/delete systems
- Add Update/Delete system

###Step-7 - Bootstrap ExpressJs and set homepage route
- Setup ExpressJs with a homepage route

###Step-8 - Integrate Mongoose library
- Integrate Mongoose library and Create a Beer model
- Generate the first API

###Step-9 - Modify Beer insert system to use API
- Add create beer API
- Modify controller and factory to use API instead of in-memory

###Step-10 - Modify Beer update and delete systems to use API
- Add update/delete beer API

##License
The MIT License (MIT)

Copyright (c) 2015 Varayut Lerdkanlayanawat

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
