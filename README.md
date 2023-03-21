# Photogram

## A simple photo storage app built using React and Firebase

This is a simple React web application that allows users to store and search for photos by tags. The backend is powered by Firebase. This app allows the below basic features,

- Upload photos to the database.
- Display all the images in a nice grid view.
- Add tags for each photo to simplify the searching.
- Delete photos.

## Installation

To get started with this app, follow these steps:

- Clone the repository: `git clone https://github.com/praaatik/photogram_v2`
- Install dependencies: `npm install`
- Configure Firebase: You will need to create a Firebase project and add your project's configuration details to a .env file in the root directory of the project. Refer to the [Firebase documentation](https://firebase.google.com/docs/web/setup) for more information. Please see the below .env which would need to be set,
  ```env
  REACT_APP_SECRET=<APP_SECRET_HERE>
  REACT_APP_API_KEY=<APP_API_KEY_HERE>
  REACT_APP_AUTH_DOMAIN=<AUTH_DOMAIN_HERE>
  REACT_APP_PROJECT_ID=<APP_PROJECT_ID_HERE>
  REACT_APP_STORAGE_BUCKET=<APP_STORAGE_BUCKET_HERE>
  ```
-
- Run the app: `npm start`

## Issues

Please note that this was simply a hobby project which I played around with when I was learning React, so there is a pretty good chance you might find a bug. You can raise an issue, and I would do my best to get it resolved. If you solve it and submit a PR, I'd be more than happy to pull it.

## Contributing

If you would like to contribute to this project, feel free to submit a pull request or open an issue on the GitHub repository.

## License

This project is licensed under the MIT License.
