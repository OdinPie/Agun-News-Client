# Agun News Project

# Live site :  https://agun-news.web.app/

This project provides a wide range of functionalities

* Users can log in or sign up to read details
* Users can add articles by logging in
* Users can subscribe to access premium articles (implemented with Stripe)
* Articles are only published after Admin has approved them
* Only Admin can access the Dashboard
    * Admin Email : admin@admin.com
    * Admin Pass : 1234A)
* Admin can 
    * see the statistics 
    * Add publishers
    * See all users and Make other users admin
    * Approve , decline and delete the articles
    * For decline, admin has to state a reason
* Users can see all articles they published and if article is declined, they can see the reason
* The button to see details of premium articles remain disabled until the user takes subscription. 
* A route named Premium articles appear after taking subscription
* A message pops up after subscription has ended
* backend uses Express JS and routes secured with JWT
