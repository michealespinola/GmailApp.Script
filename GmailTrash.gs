function GmailTrash() {

  var searches = [                                                                                                                   // SEARCH MATCHES
//  'older_than:90d AND is:read AND -is:starred AND -in:inbox AND has:userlabels AND category:forums',                               // Forums category
//  'older_than:90d AND is:read AND -is:starred AND -in:inbox AND has:userlabels AND category:updates',                              // Updates category
    'older_than:60d AND is:read AND -is:starred AND -in:inbox AND has:userlabels AND category:promotions',                           // Promotions category
//  'older_than:60d AND is:read AND -is:starred AND -in:inbox AND has:userlabels AND category:social',                               // Social category
    'older_than:30d AND is:read AND -is:starred AND label:eventful',                                                                 // Eventful monthly
    'older_than:30d AND is:read AND -is:starred AND label:gog -"items added to your" -("your order" AND "is complete") -"two-step"', // GOG updates
    'older_than:30d AND is:read AND -is:starred AND label:kanopy',                                                                   // Kanopy promotions
    'older_than:30d AND is:read AND -is:starred AND label:organic-valley -("get recipe" OR "get the recipe")',                       // Organic Valley promotions
    'older_than:21d AND is:read AND -is:starred AND -in:inbox AND label:IKEA AND from:@e.ikea-usa.com',                              // IKEA ads
    'older_than:7d  AND is:read AND -is:starred AND label:amazon.com "answer to your question"',                                     // Amazon questions
    'older_than:7d  AND is:read AND -is:starred AND label:curate-la"',                                                               // Curate LA weeks
    'older_than:7d  AND is:read AND -is:starred AND label:eventful AND subject:"this weekend"',                                      // Eventful weekends
    'older_than:1h  AND is:read AND -is:starred AND label:amazon.com "Check out today’s list of Giveaways"',                         // Amazon giveaways
    'older_than:1h  AND is:read AND -is:starred AND label:amazon.com "You are subscribed to receive this email because you follow"', // Amazon following updates        
    'older_than:1h  AND is:read AND -is:starred AND label:amazon.com "new update from Amazon"',                                      // Amazon updates
    'older_than:1h  AND is:read AND -is:starred AND label:freebies',                                                                 // Sampables promotions
    'older_than:1h  AND is:read AND -is:starred AND label:meetup AND subject:"New Meetup group"',                                    // Meetup new groups
    'older_than:1h  AND is:read AND -is:starred AND label:uptime-robot',                                                             // Uptime Robot notifications
//  'older_than:1h  AND is:read AND -is:starred AND to:me "You have been unsubscribed from"',                                        // Unsubscriptions
    '                   is:read AND -is:starred AND label:torrents',                                                                 // Torrent notifications
    '                   is:sent AND  to:(@spam.spamcop.net)',                                                                        // Spam Reports
  ];                                                                                                                                 //

  var threads = [];                                                                                                                  // WORK WITH GROUPS OF 250 ITEMS
  for (var i = 0; i < searches.length; i++) {                                                                                        //
    var tmp_threads = GmailApp.search(searches[i], 0, 249);                                                                          //
    var threads = threads.concat(tmp_threads);                                                                                       //
  }                                                                                                                                  //

  for (var i = 0; i < threads.length; i++) {                                                                                         // MOVE TO TRASH
    threads[i].moveToTrash();                                                                                                        //
  }                                                                                                                                  //

}
