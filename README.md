### 1. What are some edge-cases you'd consider before shipping this feature?

- Ensure the feature works consistently across all broswers and most common versions
- Ensure the feature works on devices of different screen sizes
- Prevent too many network requests made on every character change due to typing very quickly. Set a timeout before a search request is made again
- Add Unit tests / snapshot tests for components with edge cases for inputs
- inputs to consider: empty input, limiting max characters entered, setting min chars entered before doing asynchronous search, caching searches previously made
- test incorrect inputs with no search results returned
- handle 400, 500 api errors and test they are handled gracefully
- Sanitize input to prevent malicious code like SQL injections
- Handle invalid input like special characters
### 2. How do you design a large project like Maybe for scalability/maintainability/reliability?

### Client
- Use eslint/prettier/code formatting tools to ensure clean consistent code  across codebase
- divide frontend codebase into modules
- Have a TDD (Technical design document for each module)
- Have code coverage to make sure most code is tested
- Separate ui into reusable components
- Use libraries for repeated logic, separate business logic from UI
- Use CDNs to serve pages fast
- Optimize bundle with features like code splitting to reduce user wait times
- Use dynamic routes and code splitting to lazy load javascript only when a module of the app needs to be accessed
- Introduce graphql layer to relieve client the responsibility of querying different services and aggregating data.
- GraphQL can call required API endpoints and combine results into format convenient for the client.
### Service
- Use a microservices backend architecture to divide services by business domain, or functionality area. 
- This will enforce separation of concerns. This will also allow separate teams to be in charge of separate areas of the app.
- This will also allow for easier debugging and quicker introduction of new features into the system.
- Having postman tests for each service so it is clear how APIs can be used.
- Enforce end to end and intergration tests in build and deployment pipelines to prevent breaking changes

### DevOps
- Services must be able to meet high demands. This means scaling as traffic increases, and being able to handle high load. 
- Using a solid cloud platform such as AWS, Google Cloud Platform, etc.
- Autoscaling servers, or load balancing is required.
- Using a service like Kubernetes to spin up instances with demand can also help.
- Infrastructure gets complex as application grows. And it can get difficult to make changes in cloud infrastructure. 
- Using a solution like AWS CloudFormation or Terraform for an infrastructure as code can help maintain better, and test infrastructure before deploying services to production.
- Load testing is necessary to ensure services can handle load.
- Git structure and CI/CD pipeline to allow smooth addition of features without conflicts or breaking changes.

### 3. What's been your experience with SQL and scaling up performance with very large data sets?

- Indexing tables for faster access to data through constant lookups
- Creating join tables for commonly access data that require expensive querying
- Storing frequently accessed data in an in memory database like Redis or memcached

### 4. What's important for remote engineering teams to work well?
- Timely communication is important. As we are not in an office where we can easily find each other, it is important to keep teammates up to date.
- If we have any questions that are blocking us from making progress, it is important to ask questions as soon as possible.
- Having a central communication tool like slack or discord is essential for quick centralized exchange of information
- Task management tools like Jira or Trello so that team members are up to date with each other's progress
- Regular team check ins so that everyone can stay in the loop with team progress, goals and priorities
- Pair programming from time to time may be beneficial

# Maybe Full Stack Code Challenge

Details: https://company.maybe.co/b32696ab48f44761aa138dcfead7f099

This is a simple app to lookup airport information.

## Getting Started

The app is designed to work out of the box with no external dependencies, other than node modules.

```shell
yarn install
```
## Running locally

```shell
yarn dev
```

Once started, the app should be available via http://localhost:3000