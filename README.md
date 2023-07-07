                                                # Movie-App-interface

# Project Description
This web application uses an external API to display movies based on the website: themoviedb.org

It makes use of a db.json which acts as a server for interactivity such as movie descriptions, movie posters, movie release date, movie title, movie cover and a search option.

Since this web app is bound to expand, more functionality will be added for instance, watching trailers, sorting the latest movie, movie generation according to user preferences and much more...

# Table of contents
1. User stories

2. Tech-stack HTML, CSS, JS, Bootstrap, Node, Material User Design and API used

3. Installation and configuration instruction json server

4. Deployment to SASS: Netlify

5. API documentation

6. Author and License

# User stories
As a movie enthusiast, I want to use a movie interface to explore and discover new movies, as well as access information and details about my favorite movies. This user story can be broken down into several tasks and actions:

Browsing Movies (coming soon): As a user, I want to browse a collection of movies, either by genre, popularity, or release date. I should be able to view a list of movie posters or titles to select from.

Viewing Movie Details: Once I select a movie, I want to view its details, such as the title, release date, genres, overview, and rating. This should provide me with a comprehensive overview of the movie.

Searching for Movies: I should be able to search for specific movies by title or keywords. The search functionality should provide relevant results and allow me to quickly find movies of interest.

# Tech-stack
For this movie interface app uses a single HTML file, CSS file, JS file, some node modules and an API key. Furthermore a db.json file was generated from the API key using an online JSON prettifier. 

# Installation and configuration for operating the Json-server
All lab node dependencies should be installed by logging in to developer.themoviedb.org/getting started

Once you have created an account, you can pick a language for instance node and run npm install node-fetch@2 --save

This will install all the dependencies including all node modules


# Deployment to Netlify
The live url to the movie interface is: **your-rightsock-37ca63.netlify.app**

# API documentation
The API Key is accessed by:
1. Creating an account on the moviedb.org
2. Requesting an API key and authentication token
3. After filling out the form an API key will be granted depending on your terms of usage
4. Success, you have an API key ready for use!

# Ownership
Author: Lawi Mwaura

Copyright (c) [2023] [Lawi Mwaura]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

