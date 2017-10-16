
# StreamCo

## Why?

### How did you decide which technologies to use as part of your solution?

#### Webpack

To bundle the javascript and Babelify i have chosen Webpack since its so powerful and can do most
things any task runner can. Since React gives you a clear starting point for the application. Webpack
is the perfect fit.

#### Bootstrap

There are nothing like inventing the wheel too many times. Everyone with the label web/front/iu-developer
has heard of and/or used Bootstrap. So easy to get started with no threshold of learning an other developers
way of building components.

#### Jest

Jest is just elegant and easy, it scales really good with react for building more complex tests in the future
without any additional packages. Jest is also super fast, no one like to spend a minute waiting for the tests to pass.


### Are there any improvements you could make to your submission?

#### Testing

There is always more test to be written, I would not consider a component on a webpage finished without a selenium
like test running the expected scenarios.


#### Two endpoints

If the solution would change to ask an api for data, the REST way would be to have two separate resources
for movies and series. That would scale better as we go against looking at a specific movie or series.


#### Reactstrap

Use a library like Reactstrap to build the bootstrap parts with their components instead would give the solution
a more modularized architecture.

#### SASS

Style the application with SASS is always prefered as the application grow larger.



### What would you do differently if you were allocated more time?

* Add filters to the movie and series pages.

* Be part of building some "people who like this movie also liked"-functionality would be really cool :D

*


## Usage

### Install

```console
    npm install
```

### Run dev server

```console
    npm start
```
### Start webpack and bundle javascript

```console
    npm run dev
```
