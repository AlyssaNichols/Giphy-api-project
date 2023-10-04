# Giphy API Activity

Using a third party API is very similar to using routes on a server. The big difference is that you'll likely get back much more data than you're used to. In this activity, you will be using Axios on the server to make requests to the Giphy API.

For this project, the goal is to display a random image from Giphy along with a button that allows the user to see a new random image.

## Setup

    - `npm install`
    - `npm run server`
    - `npm run client`

## Task List

- Read through the Giphy documentation to determine which endpoints you need to complete this app.
- Register an account in order to get your API Key. This key is used for all of your requests to authenticate your app to Giphy.
- Make a `GET` request to Giphy from the `/random` router on your **server**, send the response from Giphy back to the client
- Make a `GET` request from your **client** to your `/random` route, save the response data in Redux
- Display the random gif on the page. Spend some time looking through the response! Some of the properties returned look like image paths but aren't.
- Add a button that allows the user to refresh the results by making another `GET` request to `/random`

### Wireframe
![wireframe](<Screenshot 2023-10-04 at 8.05.16 AM.png>)

