#  React Native
### What is React Native
A framework for building native apps using React

### React.js 
- A javaScript library for building user interfaces.
- Typically used for Web Development
- ReactDOM.render(...) adds the web support. 
- React itself is platform agnostic.

### React Native
- A collection of "special" React components.
- Components compiled to Native Widgets.
- Native platform APIs exposed to JavaScript.
- Connects JavaScript and native platform code.

### Big Picture
A combination of using react.js and react native will allow for real native mobile app development for ios and Android. Taking javascript code and compiling it to a real native mobile app that can be deployed in the ios or android app stores. 

### Expo & React Native CLI (Deployment)
There are two options: Explo CLI/Tool and React Native CLI. You can always switch between both ("eject").
- Expo:
    - Third-Party Service (Free)
    - "Managed App Development"
        - A lot of the complexity is abstracted away
    - (pro) Lots of Convenience & Utlity Features: Simplifies Development
    - (Con) Limited to the Expo Ecosystem
- React Native CLI:
    - By react native team/community
    - Bare-bone development (only a basic setup). A lot more packages and utilities are required
    - (con) Almost no Convenience or Utility features
    - (pro) Full flexibility: integrate with any native code

### How Expo Works
![expo](/images/expoInfo.png)

### Getting Expo to work on Mac
The get started page for expo requires the npm to install expo-cli. 
    - npm install expo-cli --global
For mac or linux, to make this terminal command to work, you need to add sudo in front of it.
    - sudo npm install expo-cli --global

### File Directory of expo init 
- .expo
    - Configuration for expo
    - No need to touch this
- assets
    - Holds images
- node_modules
    - holds all the dependencies of the project
- .gitignore    
- App.js
    - renders the application
- app.json
- babel.config.js
    - Configures how the javascript is optimized and compiled
    - Can usually leave it alone
- package.json
    - manage dependencies as usual

