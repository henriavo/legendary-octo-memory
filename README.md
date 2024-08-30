# Link to to the hosted application (if there is one)

[Visit the live application](https://jellyfish-app-vsvt3.ondigitalocean.app/)

# Instructions for running the code locally 
```
cd legendary-octo-memory
npm install
npm run dev
```

# Description of the problem and solution

Build both front end and back end to a standardized clinical assessment in a multiple-choice questionnaire format that determines symptom severity for several disorders. 

Leveraging my recent experience with sveltkit framework. A frontend web interface  prompts the user one question at a time and will submit all responses to the included backend API. 

# Reasoning behind your technical choices
In order to support users during future API releases, the route will include version number `/api/v1/assesment` This versionaning will allow updating of the API while supporting backwards compatability. This allows users using old versions to upgrade on their own timeline. 

The frontend is very light-weight and does not use any frontend framework or custom javascript. This results in fast response times for user, and fast load on initial visit. 

# Describe how you would deploy this as a true production app on the platform of your choice: 

## How would ensure the application is highly available and performs well?

1. **Load Balancing**: Distribute incoming traffic across multiple servers to ensure no single server is overwhelmed.
2. **Auto-Scaling**: Automatically adjust the number of servers based on traffic load.
3. **Monitoring and Alerts**: Implement monitoring to track performance and set up alerts for any issues.
4. **Disaster Recovery**: Have a disaster recovery plan in place to quickly recover from failures.

## How would you secure it?

1. **Authentication and Authorization**: Implement robust authentication and authorization mechanisms.
2. **Data Encryption**: Ensure data is encrypted both in transit and at rest.
3. **Input Validation and Sanitization**: Validate and sanitize all user inputs to prevent injection attacks.
4. **Rate Limiting**: Implement rate limiting to prevent abuse.


## What would you add to make it easier to troubleshoot problems while it is running live?

1. **Logging and Monitoring**: Enable logging and monitoring for security events. Use a structured logging format like JSON to make logs easier to search and analyze. Use a centralized logging system (like Splunk) to aggregate and visualize logs.

2. **Automatic Notifications**: Set up alerts for critical errors or anomalies so you can respond quickly.

3. **Health Endpoints**: Create health check endpoints in your API that can be used to verify the status of the application. This might include checks for database connectivity, service availability, etc.


## Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project

1. A persistance layer is missing. All this data is hard coded as a static variable. This was a trade off given the short timeline. If there was more time, adding a non relational database layer would be ideal. Non relational because the doman mapping and assesment mapping are expected to be contained in a single table each. 

2. Session management is missing. This would avoid users responses from being lost if internet connection is not reliable. Implement a robust method for generating unique session IDs, often using UUIDs or other secure methods. Define an expiration policy for sessions.

3. More robust error handling is missing. Handling error cases like missing assesment questions, or missing mappings is not handled yet due to time constraints. When fetching these items from DB, proper validation would be ideal.

4. Unit testing is missing due to time constraints. 

5. More logging is missing. Carefully consider what items will be useful to log in order to make debugging in the future faster. 

6. Support for different screen sizes is missing. Frontend should be able to dyanmically adjust for users accessing website from desktop or mobile. 

# Link to other code you're particularly proud of

[Github link](https://github.com/henriavo/cuddly-octo) This is a full stack application with MongoDB persistance layer and hosted on digitalocean. I designed the frontend using Boostrap. I designed the database schema layer for photo storage, user registration, and user authentication. Passwords are stored encrypted. Server side rendering, asynchronough API requests from browser, along with asynchronough DB reqeusts are also implemented. All DB requests are made server side only for security reasons. DB credentials are stored on server as environment variables. Photo uploads will upload files to aws S3. S3 bucket policy does not allow public access, instead files are uploaded and downloaded using secure pre signed URLs. 

# Link to your resume or public profile
[LinkedIn](https://www.linkedin.com/in/henri-idrovo-7427402b/)

[Resume](https://henriguy1210-bucket.s3.us-west-2.amazonaws.com/henri_idrovo_resume.pdf)

[Github](https://github.com/henriavo)


