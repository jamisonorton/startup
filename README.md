# Startup Documentation

## Startup Pitch

I would like to create a website for my wife's piano lessons business. Outlined below are how each technology is going to be implemented in the site.

- **HTML** - I will be creating four pages using correct HTML structure. The pages are as follows: Home, About, Calendar and login.
- **CSS** - My site will use styling that will look good on a variety of devices and have good color choices and contrast.
- **JavaScript** - Provides login, and functionality to the various landing pages.
- **React** - Multi-paged application with views componentized and reactive to user's actions.
- **Web service** - functions for a sign-up button to schedule the first lesson. I also want to implement the google calendar api to show her calendar which will have an appointment scheduler for the students to chose their lesson spot.
- **Authentication**: This site will require authentication in order to access or view landing pages other than home.
- **Database data**: We will have a database containing the books that are recommended to students based off of years of playing.
- **WebSocket data**: We will want a way to update students with important information so push notifications will be used for new messages or critical events such as needing to miss a day of appointments.

## Example Home Page

![Home_page](https://github.com/jamisonorton/startup/blob/main/home_page.png)

## Startup HTML Deliverable

- **Simon** - I have copied the simon-html directory into my startup repository. I have also copied the deployFiles.sh script into my startup directory and used it to copy all of my html pages to my aws server.
- **Github** - I have also linked my github repository in the body of my index page so it is the 2nd thing you can read. I plan on adding this lower on the page in the footer section later. I have also committed over several days to show that I have ownership of my code to avoid rejection of my submission.
- **Startup** - I have added several landing pages and included them in an unorganized list. They will eventually be fixed with the css when I get to it for a proper navbar.
- **HTML_Pages** - I have included 3 html pages. The homepage, payment, calendar, and login pages. These will be used as the main landing pages on my application.
- **HTML_Tags** - I have included all of the required HTML tags. I put the nav tag in the header and a h1 tag on each page to show what page you are on.
- **HTML_links** - I have made the navbar link to each of the pages that I have in my app. This takes you to the pages you click on. On each page I have included a body with a header to show which page you are on.
- **App_Context** - I have included some context for what each page will be used for
- **3rd_party_calls** - I have included on which page I will be calling 3rd party services.
- **Login** - I have created a login page with placeholders for email and password. This will get stored in a different database than the book list.
- **Database** - I have included a bookList.html page that will show the books assigned to each child. This will update based off teaching level assigned by the teacher.
- **Websocket** - I have included on the index.html and calendar.html where my websocket will go to show realtime communication.

## Startup CSS Deliverable

I added css to make the pages look good. Mostly used tailwind to apply the styles rather than bootstrap so my site doesn't look like a standard bootstrap website. I also used NextUI for the buttons and components to make those look great.

## Startup React Deliverable.

I used a startup React with Vite site then added NextUI to add the components. React Router is used to go between pages. There are multiple react components to mock login, signup, I used hooks to create modals for these actions. I also have added a Calendly calendar signup in the calendar page. I want to also add the Google Calendar API to show the teachers availability and have it look better by taking up the whole page rather than a "cell phone" portion. I have also added images and descriptions in each page.

I will work later on setting up the login and signup functionality.

## Startup Service

I added some express logic for calling the api. Remember when using a .env file to not have random spaces next to the string and = sign. So it should be NAME=string not NAME = string. Also connecting to the mongodb you can use 2 methods. First the URI that they give you can add the database that you want to connect to before the first ? or you can add another variable just for the database name.
