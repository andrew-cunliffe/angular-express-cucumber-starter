## angular4-express4-cucumber

Simple project extracted from my personal project to help others get started with angular, express, typescript, cucumber and coverage.

### Objectives

This project is an extract from my company project building an ecommerce solution for small businesses, as others have asked how the project is setup I have posted a cut down version for others to look at and consider how I have done things to enable the best efficency, this extract does not include things like running in a CI/CD environment which the main project does.

### Running the project

- Install Dependencies `npm install`
- Execute Tests `npm run test`
- Run in development mode (auto refresh of changes) `npm run develop`
- Build a production ready deployment `npm run build`
- Start for production use `npm start`

### Notes

- Database connection on the server is not included to allow others to pick their preference, recommend using either sequelize or mongoose both will drop in very cleanly to the project.
- This project uses typescript for the source code only.
- The tests are written using ES6 where supported by cucumber.
- Coverage reporting is only available on the server testing (welcome to contribution for enabling coverage on the UI too).
- Favour of E2E tests over unit based testing, mocking is possible on the server side to improve overall coverage, however deemed that if you cannot perform an action as a user on the UI then you should not have tests as such E2E covers all viable code on the UI, again mocking of error states would be possible.
- While we use Node 8 now to build our projects they are deployed and tested with 6.10.x (current LTS) as such package-lock is currently ignored.
- We specify exact versions for dependencies, and recommend those using this project run `npm outdated` to review and update dependencies accordingly, when doing this ensure that all tests are still passing correctly before committing dependency changes.

### Requests

While open to requests for how a certain operation might occur in a larger production environment, there are answers I may not be able to provide. This is just an example project to help others overcome some of the issues we had when building our project, but are happy to help others get started on larger scale solutions.
