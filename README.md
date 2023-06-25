# First of all Why do we need React Redux?

Components in React are constantly interacting with each other. This is because they use each other's state. For example, we show the name of the logged in person in the navbar of a page. This name is the state of the navbar component. Then when we go to the profile page of the person, we see his name there as well. Since it will not be very useful to send a request to our service every time to learn this name, it will be faster and more effective to get the information from the component holding this name information. This event is called component drilling .
<img src="https://velopert.com/wp-content/uploads/2016/04/02.png"/>

Components update themselves after state changes.
This brings with it a few problems. First of all, if a component needs state information, this information must always come from the upper layer. In this case we will always depend on the upper layers for this information. The second is when the parallel components need each other's state as the number of components increases; Since they will not send the state directly to each other, this will force them to keep the state in a component that is the ancestor of both. There will always be a structure like centralizing state.
<img src="https://velopert.com/wp-content/uploads/2016/04/03.png"/>

Redux has a very simple solution to this. It keeps states in a structure called store. All components depend on this store. If a component does something about the state, the components that subscribe to the corresponding state of the store automatically update themselves. In this way, since all components deal with a single structure, it becomes a more manageable state.

# For detailed explanation, you can review the documents...
<a href="https://file.io/o36O2twxKwPk">Go to Documents</a>



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
