# Breaking Bad Generator

* The journey
    - Used Jquery before in the application but
        > Solved using plain JS code since it is a small application
    - Had ES6 support problems, 
        > so changed to ES5 code and applied polyfills for few
    - Had external smoke emitter js file for emitting smoke from RV 
    - Used standalone jasmine unit testing 
        > Then changed to use Karma for running Jasmine unit test cases
    - Used Gulp to watch all file changes and build
    - While building i need to inject JS and CSS files directly into html instead of manual configuration
        > So Webpack came to rescue.  

* Some Lessons

- “hot” Vs “inline” webpack-dev-server options
    >“inline” option adds “Live reloading” for the entire page. “hot” option enables “Hot Module Reloading” that tries to reload just the component that’s changed (instead of the entire page). If we pass both options, then, when the source changes, the webpack-dev-server will try to HMR first. If that doesn’t work, then it will reload the entire page.

- When the source changes, all 3 options generates new bundle but,
 
    > 1. doesn't reload the browser page
        > $ webpack-dev-server
    > reloads the entire browser page
        > $ webpack-dev-server --inline
    > 3. reloads just the module(HMR), or the entire page if HMR fails
        > $ webpack-dev-server  --inline --hot
        