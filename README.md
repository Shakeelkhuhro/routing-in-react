# Routing in React JS
Routing in React JS refers to the ability to navigate between different pages or views in a single-page application (SPA) without having to refresh the page or send a new request to the server. This is achieved by using a library called React Router.

## React Router
React Router is a third-party library that provides a way to handle routing in a React application. It uses the concept of declarative routing, where you define the routes in your application using components and props.

### Different types of router
#### 1. BrowserRouter:
BrowserRouter is the most commonly used router in React applications. It uses the HTML5 history API to manage the URL in the browser's address bar. When a user clicks on a link, the BrowserRouter updates the URL and renders the appropriate component based on the URL.

One benefit of using BrowserRouter is that it allows you to use familiar URLs that are easy for users to understand and bookmark. However, it requires server configuration to support client-side routing, which may not be possible in some environments.

#### 2. HashRouter:
HashRouter is another type of router that uses the URL hash to manage the URL in the browser's address bar. When a user clicks on a link, the HashRouter updates the URL hash and renders the appropriate component based on the hash.

One benefit of using HashRouter is that it does not require server configuration, so it can be used in environments where server-side configuration is not possible. However, it can result in less user-friendly URLs that are harder to understand and bookmark.

#### 3. MemoryRouter:
MemoryRouter is a router that does not use the browser's address bar. Instead, it stores the current location in memory. This is useful for testing or building applications that do not require a real URL.

One benefit of using MemoryRouter is that it allows you to build and test your application without worrying about URLs or server configuration. However, it is not suitable for production use as it does not provide real URLs that can be shared or bookmarked.

These are the three most commonly used types of routers in React Router. Each router has its own use case, so choose the one that fits your application's requirements.