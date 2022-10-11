import React from 'react';

const Blog = () => {
    return (
        <div className='container p-3'>
           
            <div>
                  <h3 className='bg-info bg-gradient p-2 m-4 ' >What is the purpose of React Router ? </h3>
                  <h5 className='m-5'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. It is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.React router can be an overkill for certain projects where all you need is basic navigation and routing functionalities. In that context, React Router is not necessary at all. </h5>
            
            </div>
              <div>
                  <h3 className='bg-info bg-gradient p-2 m-4 ' >How does Context API works? </h3>
                  <h5 className='m-5'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. It  is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context. </h5>
            
            </div>
              <div>
                  <h3 className='bg-info bg-gradient p-2 m-4 ' > Short note of Useref hook .</h3>
                  <h5 className='m-5'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.
 </h5>
            
              </div>
        </div>
    );
};

export default Blog;