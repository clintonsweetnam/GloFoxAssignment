# Glofox Recruitment Frontend Case Solution By Clinton Sweetnam
## Commands
#### Start Dev Environment

```npm
npm start
```
This command will start the webpack dev server. This allows easy development and debugging of the application. The server will begin on http://localhost:8080. It is enable with hot-loading so any changes, once saved will cause an automatic refresh of the browser. The code is also not minified during development to allow easier debugging

#### Run Jest Tests
```npm
npm test
```

This will run all test found in the solution folder. 

#### Build Production Files
```npm
npm run build
```

This will run a build of the production code which will be built to the www folder. This code should be minified and built to the bundle.min.js file. 

## Notes
1. I have used React as my JS framework. I have tried to break it down into compontents where possible, however if given more time I would try and break it down into more generic pieces which could potentially be used in other instances..
2. I have used npm as my task runner. It currently only runs start, test and build but can easily be configured to run any task you like. For example it can be used to set config filess correcttly based on whether you are building development or in production. This could be useful if you want different settings between both enviroments. I have personally used it for this in past projects
2. I have only included one javascript test here due to time contraints. But the framework is all in place so it should just be a matter of adding in tests as you code.
3. I have used webpack to handle all the bundling and minification. The npm task outlined above, run the relevent webpack commands in the background. I have also used webpack dev server during development.
4. I have tried to indicate how sass can be used to make css more extensible and manageable. I have included some SassSettings files which can be used to store settings files. For example here I have a colors file which stores colour settings. This can be used in an less file in the project so when changing a base color is required it only needs to be changed in one place.
5. I was unsure which images in the list items and which icons to use in the buttons. I just hardcoded in the image to one in the assets folder and for the icons I just used similar icons from Fontawesome.
6. For the build I have just bundled and minified the all the files to a www folder. This could be run in production using a basic static file web server, however I have not included that as part of the assignment as I though it was not  necessary. for example if you install http-server (npm install http-server -g) and run it in the www folder (http-server) it should do the job!!
7. npm install may take a few minutes for the first run which I guess is pretty standard with NPM.....