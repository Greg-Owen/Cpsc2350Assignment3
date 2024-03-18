1. Assignment 3 for cpsc-2350.<br></br>
This is a repo to contain a react project relating to the third assignment of my cpsc-2350-Software-Practices class. It contains a personal website containing information about myself, my hobbies, and my education.
<br></br>
2. Link: Unfortunately I was unable to fix the problem of deployment to GitHub pages, when marking this project please navigate into subfolder assign03, assuming react.js is already installed please run "npm start" inside of the terminal, all coding of the site was made inside the components subfolder containing Main.js, Header.js, Footer.js, Navbar.js.
documentation: error when attempting deploy was <br></br>Conversion error: Jekyll::Converters::Scss encountered an error while converting 'assets/css/style.scss':
                    No such file or directory @ dir_chdir - /github/workspace/docs
<br></br>
The following changes made to package.json were attempts to resolve this error:<br></br>
"homepage": "https://Greg-Owen.github.io/Cpsc2350Assignment3",<br></br>
"homepage": "https://Greg-Owen.github.io/Cpsc2350Assignment3/assign03",<br></br>
"homepage": "https://Greg-Owen.github.io/assign03",<br></br>
"build": "react-scripts build --output-path=../docs",<br></br>
"deploy": "gh-pages -d ../docs"<br></br>
"build": "react-scripts build --source-path=./docs --output-path=../docs",<br></br>
"build": "react-scripts build --output-path=/github/workspace/docs",<br></br>
<h3>Update: Temporary fix</h3><br></br> I made a separate repository where you can view the <a href="https://greg-owen.github.io/assign03/">website.</a><br></br>
3. The technology stack used to create this website was react.js, a link to a react.js tutorial was included in the personal website. 
