# NotesOnReactNative
Learning Sources: Academind, React Native Documentation, Stack Overflow

- Learning/practice projects located in projects directory: 
    - rn-first-app: barebones test application
    - rn-complete-guide: An application that allows a user to set up goals

- chOne:
    - What is React Native
    - Overview
    - Big Picture
    - Expo & React Native CLI
    - Expo in Detail

- chTwo:
    - Behind the scenes

- chThree (The Basics):
    - Components
    - Functions
    - css in react native? 
    - Debugging

- Questions/Observations
    - When to use self closing components or closing components
    - Dealing with passing functions with parameters to components
        - For a function to pass in parameters, an anonymous function is required as it sets it as a "tobe" executed function when its component is rendered. 
        ```javascript
            () => props.onAddHandler(enteredGoal)
        ```
        - We can also use the bind() feature
        ```javascript
            props.onAddGoal.bind(this, enteredGoal)
        ```

