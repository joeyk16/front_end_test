# React App Test

Hello welcome to my React Test App. Before running the server please go here to spool up the API https://carton-cloud-api.herokuapp.com/

## Set up

 - `git clone git@github.com:joeyk16/front_end_test.git`
 - cd into project
 - `npm install`
 - `npm start`

## Why did I create the API?

- https://carton-cloud-api.herokuapp.com/
- Repo: https://github.com/joeyk16/carton_cloud_api
- Your API was not allowing requests from an external host.
- Error was
```
Failed to load http://localhost:8000/api/deliveries: Response to  preflight  request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access

```
- I then proceeded to write react in your app. This would of solved the issue. This required me to install https://github.com/phpv8/v8js which I ran into many problems trying to install.
- After all of this, I decided it would be quicker if I wrote your API myself.

## Why is it not a single page app?

I started off as a single page app. Then I realized it was going to get too messy and hard to navigate. For ease of navigation, and clean code I created separate files.

## Why is the edit and delete page missing?

I've been working long hours at work and need this done. By creating the edit and delete page you will see more of the same. I've had to create the API from scratch and create API services so it took longer then I thought.

The way I've done the delete was quicker, better user experience and cleaner.
