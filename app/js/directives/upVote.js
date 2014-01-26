'use strict'

eventsApp.directive('upvote', function(){
	return{
		// C is class, E is element, A is attribute
		restrict: 'E',
		templateUrl: "/templates/directives/upVote.html",
		scope: {
			// if you look in upVote.html, there are 3 pieces that need isolating, the upVote() and downVote() functions
			// and the count expression.  So in here we need to represent them so they can be passed values from scope
			// We do this when we use the <upvote> directive on EventDetails
			// <upvote upvote="upVoteSession(session)" downvote="downVoteSession(session)" count="session.upVoteCount"/>
			// & allows you to execute a function in the parent scope (vs the isolate scope), = passes an integer, @ passes a string
			upvote: "&",
			downvote: "&",
			count: "="
		}

	};
})
