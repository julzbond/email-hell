###Email Hell

We just found out that there is a bug in production that our e-mail function was iterating errantly and sending duplicate e-mails to many users. We need to fix this quickly but we don't want to send out a mass apology letter to all of our users.

Our sysadmin gave us the SMTP logs and we need to process the logs and identify which users received multiple e-mails so that we can directly send them a follow up e-mail explaining the situation and offer super cool swag to keep them on as customers.

Also, the boss wants this done ASAP, we don't have time to do this manually...HAAALLLLPPP!

###The Fix

Write a function that takes in the data below from our logs that has all the email addresses that were sent to and create a report of all of the e-mails and the number of times an e-mail was sent to them.

###The Gotcha

We're not sure when we'll get out a hotfix for the errant code so this may happen again. Can you write us an interface for doing this on our own so we don't have to bother you every time this happens? Thaaaaanks :D