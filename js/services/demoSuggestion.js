app.factory('demoSuggestions', function() {
    return {
        posts: [
            {
                title: 'Free pizza at club meetings',
                upvotes: 5,
                comments: ["That's tight! I agree", "I'm hungry already"],
            },
            {
                title: 'End all club emails with Laffy Taffy jokes',
                upvotes: 9,
                comments: [],
            },
            {
                title: 'Retrofit water fountain with Gatorade',
                upvotes: 7,
                comments: [],
            },
            {
                title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
                upvotes: 3,
                comments: [],
            }
        ]
    };
});