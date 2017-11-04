# Suggestion Box (Code Academy)
Learning Front End via AngularJS 1.6

- Phase 1: Building the single page application
- Phase 2: Beautify the web page with CSS
- Phase n: Deploy

Phase 1: User Stories
-
+ I want to be able to create a suggestion.
+ I want to be able to upvote a suggestion.
+ I want the most upvote suggestion to rise to the top.
+ I want to comment on a suggestion.

Phase 1: Strategy
-
+ Determine the model - Suggestion
    + Suggestion
        + title: String
        + votes: Integer
        + comments: String[]
    
+ Design the View - Build HTML structure to display
    + List of Suggestions
    + 'Create a Suggestion' visual
    + 'Up-vote' visual, 'down-vote' visual
    + 'Add comments' visual
    + Display list of Comments below Suggestion
    
+ Design the Controller - Logic to handle
    + Population of suggestions sorted by 'Likes' upon page load, new suggestion, change in likes
    + Change vote count for any suggestions on up or down votes
    + Trigger ability to create a suggestion
    + Add a suggestion to the list
    + Trigger text box for comment input
    + Add comment to a given suggestion


Phase n: Deploy
-  
Deploy to GitHub as a static page