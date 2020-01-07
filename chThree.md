# chThree The Basics
### Core Components
- Built into React Native Components
    - View
        - Works like a div in web development
        - Good for wrapping and applying styles to a group of components
    - Text
        - Outputting text 
        - required for text
    - Button / Touchable
    - TextInpit
    -Image

- Your UIs/ Custom Components (Composesed of built-in components)

### Styling
    - Styling can be done via javaScript through either inline styles or stylesheet objects (preferred)
    - React Native just offeres CSS-like property names. 
    - Doesn't use html or css

### Functions
- event handlers:
    - onPress = onClick
- KeyExtractor takes a look at the props of its item for an index

### Layout
- Use flexbox for organizing and creating layouts
    - for the main axis you style the child elements (flex style property), and for the cross axis you stlye the parent element
    - Can use flexbox stylings to have content adjust itself to the available space
- There are some differences between web and mobile flexbox
- Flatlist renders what's on the screen whereas scrollview renders all components. Both has it's pros and cons, but for an application with thousands of components, the scrollview would be ineffecient. 

### Debugging
- What to Debug?
    - Error Messages / App Crashes
        - Syntax errors
        - Bugs in code (undefined values)
        - "Unavoidable errors (e.g. failing network requests)
    - Logical Errors
        - Undesired or unexpected app behavior
        - unexpected/ Unhandled user behavior
        - Sequence of steps leads to errors
    - Styling, Layout & UX
        - Unexpected/ "wrong" styling or layout
        - Inconsistent results on different devices
        - Layout doesn't "work" on certain devices or orientations
- How to Debug?
    - Read the error messages 
        - Often, the error message contains the solution or a exact pointer at the problematic code line
    - console.log()
        - Get a feeling for the "flow" of the code
    - Chrome Debugger (+Breakpoints)
        - Dive into the code in great detail step by step

