# chTwo: Behind the Scenes

### Typical code in React & React Native App 
```javascript
const App = props => {
    return (
        <View>
            <Text>yee yee boi</Text>
        </View>
    );
}
```
- In this example, View & Text are special components made specifically for mobile applications as html elements are not supported.
- React native is able to translate those components into readable formats for native mobile applications.
- Views are compiled into real Native components. The javascript won't be compiled.

### More Details. (Platform Functionality)
- React for the Web: div, input
- Native Component (Android): android.view, EditText
- Native Component (ios): UIView, UITextField
- React Native: View, TextInput

### JavaScript Part/ Our Logic
- UI:
    - Components exposed by React Native
    - Compiled to native views
- Logic: 
    - Written by us, in javaScript
    - JavaScript thread hosted by React Native app
    - Not compiled!
    - "mini javaScript app" within the main application that handles all the javaScript logic. 

    ### Visual of Behind the Scenes
    ![overviewOne](/images/overviewOne.png)

    ### Things to things to Keep in Mind
    - No or very little cross-platform styling of components. You need to check how the code effects the native application for each different device.
        - Style components on your own or use third-party libraries.
    - Only a basic set of pre-build components (everything you need though)
        - Build components on your own or use third-party libraries 
    - Tools to create responsive designs but no responsiveness out of the box
        - Create responsive designs on your own

