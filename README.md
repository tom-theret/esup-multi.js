# esup-multi.js

A simple wrapper to interact with the internal [esup-multi](https://github.com/univlorraine/esup-multi/) API.

![NPM Version](https://img.shields.io/npm/v/esup-multi.js)
![NPM Downloads](https://img.shields.io/npm/dy/esup-multi.js)
![NPM License](https://img.shields.io/npm/l/esup-multi.js)

> [!important]
> This package is not affiliated with any institutions and is not officially supported by any institutions. I am not responsible for any misuse of this package. This package is intended to help students and staff to interact with the internal API of the Multi.

## 📦 Installation

```bash
# With npm
npm install multi-api.js
# With pnpm
pnpm add multi-api.js
# With yarn
yarn add multi-api.js
```

## 🔧 Usage

### Authentification with credentials

```javascript
const { authWithCredentials } = require("esup-multi.js");

async function login(instanceUrl, username, password) {
    const user = await authWithCredentials(instanceUrl, { username, password });
    return user;
}

login("https://example.com", "multi", "api")
    .then(user => console.log(user))
    .catch(error => console.error(error));
```

## ✅ Features

- [x] 🔐 Connection
  - [x] With credentials
  - [x] With refresh token

- [x] 📰 Actualities
- [x] 💳 Cards
- [x] 🕘 Clocking
- [x] 📒 Contacts
- [x] 🪪 Features authorization
- [x] 📯 Important news
- [x] 🗺️ Maps
  - [x] Campus
  - [x] Categories
  - [x] Points of interest
- [x] 📅 Personal calendars
- [x] 🍴 Restaurants
  - [x] General information
  - [x] Menus
- [x] 📅 Schedule
- [x] 🔑 SSO Connection (via CAS for external services)
- [x] ✉️ Unread messages count
- [x] 🫴 Useful information
- [x] 👨 User information

PS: Features are dependent of your institution's configuration.

## 📜 License

This project is licensed under the CeCILL 2.1 License - see the [LICENSE](https://github.com/tom-theret/esup-multi.js?tab=CECILL-2.1-1-ov-file) file for details.

<!-- ## 📝 Contributing

Please read [CONTRIBUTING.md](https://github.com/tom-theret/uphf-api/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us. -->

## 🙏 Acknowledgments

- [Université de Lorraine](https://www.univ-lorraine.fr/) for [esup-multi](https://github.com/univlorraine/esup-multi/).
- [UPHF (Université Polytechnique Haut-de-France)](https://www.uphf.fr/) for the account.
- [Raphaël (raphckrman)](https://github.com/raphckrman) for the structure of the library.

## 📧 Contact

If you have any questions, feel free to contact me at [tom.theret@uphf.fr](mailto:tom.theret@uphf.fr).
