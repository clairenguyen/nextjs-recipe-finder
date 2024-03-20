## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and utilizes  the [Edamam Recipe API](https://developer.edamam.com/edamam-recipe-api) to fetch data. You will need to create a `.env` file in the root directory and set the `EDAMAM_APP_ID` and `EDAMAM_APP_KEY` environment variables, which are free to set up. 



First, install dependencies, then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The available paths include:
  - `/recipes` or `/` to get all recipes 
  - `/recipes/[id]` to get an individual recipe

## Testing

This project utilizes `jest` for unit tests and `cypress` for some simple end-to-end tests.

The cypress tests will require the app to be running on `http://localhost:3000`

Run 
````bash
npm run test:all  # both jest and cypress tests in the terminal

npm test  # jest tests
cypress run  # cypress CLI tests
````

## Notes

Please note that the app assumes you are using the free tier of the Edamam API which only allows 10 requests per minute. One potential place to be wary about is if cypress tests are run consecutively, particularly in the browser via `cypress open`. For the most part, this shouldn't be an issue.