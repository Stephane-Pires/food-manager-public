<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="public/images/divers/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Food-Manager</h3>

  <p align="center">
    I aim to simplify the food management of a family :
    
   Family Cook book (I'm here right now)  
  _Democratic plannification of meal planification_  
   _Auto generation shopping list_    
   _Food stock management with expiration date notification_   
   _Detection of peremption date inside an image_   
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <!-- <a href="#about-the-project">About The Project</a> -->
        <a href="#built-with">Built With</a>
    </li>
    <li>
        <a href="#notes">Notes</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

<!-- ## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email`, `email_client`, `project_title`, `project_description`

<p align="right">(<a href="#top">back to top</a>)</p> -->

## Built With

-   [Next.js](https://nextjs.org/)
-   Link/Image/Head/SSR/SR/ISR (GATSBY CHALLENGER)
-   [React.js](https://reactjs.org/)
-   Ok
-   [ChakraUI](https://chakra-ui.com)
-   Root Theming (Color, breakpoint, etc..), StyleProps/ Gradient/ CSS Variables /Etc... (SEMANTIC CHALLENGER)
-   [PostgreSQL](https://www.postgresql.org)
-   A database
-   [Apollo](https://www.apollographql.com)
-   (GRAPHQL) REST CHALLENGER Object, Query, Mutation, Subscription. Dynamic field querying / Apollo Server/Client to manage GraphQL (cache)
-   [Prisma](https://www.prisma.io)
-   ORM to manage database & data, generates type
-   [Nexus](https://nexusjs.org)
-   From SDL to code description for GraphQL, autogenerated types, and typesafety
-   [Formik](https://formik.org)
-   React form made easy

<p align="right">(<a href="#top">back to top</a>)</p>

## Notes

-   Adding <QueryResult> to a page that is statically rendered is probably useless since the loaded state will always be false. _The loading will be done at build time_. I project to use SSR so... it's not gonna be a problem long term wise

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

<!-- ## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   npm
    ```sh
    npm install npm@latest -g
    ``` -->

<!-- ### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
    ```sh
    git clone https://github.com/github_username/repo_name.git
    ```
3. Install NPM packages
    ```sh
    npm install
    ```
4. Enter your API in `config.js`
    ```js
    const API_KEY = 'ENTER YOUR API'
    ```

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- ROADMAP -->

## Roadmap

### Short/Mid Term features

-   [ ] Cook book
-   [ ] Dynamic recipe visualisation
-   [x] Capacity to add recipe with a form (FORMIK)

### Dev checklist

-   [x] Create README
-   [x] Migrate to PostgresSQL
-   [abandonned] ScalarTypes nexus DateTime
-   [x] Formik exploration
-   [x] Form myself on Apollo
-   [x] Add mutation "createRecipe"
-   [x] Use prisma-nexus to foward type and description from database
-   [x] Manage success and errors inside the add-recipe page
-   [ ] Rethink/Architecture _Data Schema_ of the recipes
-   [x] Add a navBar
-   [x] Add a TextArea for the description field of "add-recipe"
-   [x] Create new import category
-   [x] Fix the bug on "cook-book", it should display the recipes properly with the one that was just added after a succeded mutation. in order Check:
    -   1️⃣ the SSR/Static workflow of NextJS
    -   2️⃣ Apollo mutation/query/cache
    -   The bug doesn't happend when the App recompile after a mutation
-   [ ] Learn more about Apollo & GraphQL (_notably cache management_)
-   [ ] Refactor/Add Typescript (_notably Formik, ApolloClient, NextJS_)
-   [x] Use Recoil to manage a number count
-   [ ] How to update the types (Typescript) acccordingly to the GraphQL "client-query"  
         - [ ] Create a "Typed" folder with utils type from typescript ?
-   [ ] Performance issue with TTFB while fetching info using GraphQL "cook-book" "recipe" find where does come from the latency:
    -   1️⃣ Apollo cache ? (_again_)
    -   2️⃣ Database latency ?
-   [ ] React "key" console error with the drawer
<!-- See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- LICENSE -->

<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information. -->

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- CONTACT -->

<!-- Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name) -->

<!-- ACKNOWLEDGMENTS -->

<!-- ## Acknowledgments

-   []()
-   []()
-   []()

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png