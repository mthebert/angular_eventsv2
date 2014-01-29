# Angular Event Application

This project is a sample [AngularJS](http://angularjs.org/) web app by [Matt Thebert](mailto:matt@thebert.com) which will be a simple event calendar.

Some decisions being made on top of AngularJS are:

## Angular-Seed

I am using the [angular-seed](https://github.com/angular/angular-seed) as a base for the project.  It is a nice starting point for an AngularJS app.  Version 1.2.6 is where I'm jumping in.  (See Notes below for a change to this)

## Bootstrap

Why reinvent the wheel for CSS when you can add some quick styling to your app?  I still haven't made the leap to v3, so I'll stick to [v2.3.2](http://getbootstrap.com/2.3.2/)

## JQuery

Angular can do a lot with the DOM, but you still can always get some help with [JQuery](http://jquery.com).

## Underscore.JS

I will also be using [Underscore.JS](http://underscorejs.org/) for some additional JS help.

## Node.JS

For serving up my web app, I'll be using [Node.JS](http://nodejs.org/) while I develop locally.  (See notes below for issues needed to resolve)

## JSON

OK, this isn't really necessary but for now the decision is instead of having a "real" data store, I'll be using JSON text files to store my data locally.  In my TODO I have made note that I will change this once the first phase of development is done.  But I suppose this is an infrastructure decision worth noting for now.

### To DO:
There will be some testing to come, an actual data store of some sort to replace the JSON, and maybe we will push this to the cloud.

-Better validation on the new events form
-use filter to display an icon for the session level (intro, intermediate, advanced)
-Update the save method of eventdate to lookup next eventID by finding the highest event id of all existing events + 1
-Wire up dave button on EditProfile to save user using service called userData, use a $resource and save to data/user/:userName
-Store upvotes to a cookie, only allow one upvote per session
-allow users to log in after storing profile, track upvotes in their user profile object
-HTML 5 routing was not working right, fix this
-Convert editprofile.html to a template and add routing and link
-create an about page using template instead of templateurl
-add resolve to /events so page doesnt load until events have been loaded from disk
-redo video 5-14 - directives and JQuery to redo the datepicker 
- create a "focus" directive to place on input element that causes focus on load
- directive that presses save when enter is pressed for form
- replae event and session html on eventDetails with custom eventDetails and sessionThumbnail directives
- on newEvent.html, combine eventDate input element and the datepicker directive into a single date-input directive

### Notes: 
Angular: Most documentation has not caught up with 1.2.x.  There seems to be a big difference in the promises/resource area as well as some routing changes, so for the sake of making things easier for now - I have rolled back my Angular to v 1.1.5

Node: When dealing with the sections with $q/$resource and promises, My node service did not allow the post to save data.  I had to edit my web-server.js to handle the post.  I found the solution [here](https://raw.github.com/glepretre/angular-seed/9108d8e4bf6f70a5145b836ebeae0db3f29593d7/scripts/web-server.js)


### PluralSight

At the center of all this, I will be creating this app while trying to add to my AngularJS knowledge by going through the [PluralSight course on Angular Fundamentals](http://www.pluralsight.com/training/Courses/TableOfContents/angularjs-fundamentals)


### Contact

For more information on this project, feel free to contact me at [matt@thebert.com](mailto:matt@thebert.com) or on [Twitter](https://twitter.com/matt_thebert)

### Project start: 1/10/2014
