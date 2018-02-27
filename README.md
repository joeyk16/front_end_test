# React App Test

Hello welcome to my react app test. Before running the app please go here to spool up the api https://carton-cloud-api.herokuapp.com/

## Set up

 - `git clone git@github.com:joeyk16/front_end_test.git`
 - cd into project
 - `npm install`
 - `npm start`

## Why did I create the API?

- https://carton-cloud-api.herokuapp.com/
- I created your API because your app had some issues. Your API was not allowing requests from an external host.
- Error was
```
Failed to load http://localhost:8000/api/deliveries: Response to  preflight  request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access

```
- I then proceeded to write react in your app. This would of solved the issue. However, that required me to install `https://github.com/phpv8/v8js\` which I ran into many problems trying to install.
- After all of this, I decided it would be quicker if I wrote your API myself.


## Notes

This app does not use mocked data. This is real data from a real API. Due to this, I had to write a lot more code for this test. I've done a lot of overtime at work the last 3 weeks and don't have much time. Due to this, I didn't do the following:

1. The edit page
2. Copy the delete page exactly as you had. I prefer the user experience I provided on the delete.
