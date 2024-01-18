api trip detail

GET
https://api.vexere.com/v3/trip/v2CNINENMNGgIyMyICMTUwq_yXBzoKMTktMDEtMjAyNEgdUKEDqAGeBA?from=29&to=417&config=ONLINE&available_seats=29
bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXAiOjIsInVzciI6ImZlIiwiY2lkIjoiYTRlYWM1MDAtMzYyNC0xMWU1LWFjOWUtMDkxMjRjNjAxMDEzIiwiY3BuIjoxLCJleHAiOjE3MDU1ODY1MTN9.gTG3Ev6bqa-WMieA2BUjVkx2ruyx4VqIeMbjkIYXXms

schema

# Base

- createdAt
- updatedAt
- id
- isDeleted

# User

...basic information

- level (to get permission in system)

* followers (n-n)
* messages (1-n)
* posts (1-n)
* friends (n-n)
* followings (n-n)

# Post

- title

* author (n-1)
* taggedPersons (n-n)

- likes
- views

* comments (1-n)

- files
- isShared

* originalPost (1-1)

- status

# Comment

- author (n-1)

* isEdited
* content
* files
* ReplyComments (1 - n)

# Message

- author (n-1)
- receiver (n-1)

* isRead

# Notification

- data
- isRead
- title
- user
- dataType

# Order

- payer
- post

* status
* paymenChanel
* paymentRefId

## How to sort post to display in the homepage

# Point to rank post

likes : 2
views : 1
comments : 3
shares : 2

Trending sort by desc: created Time + likes + views + comments + shares

# Trending page get list post :

20 posts get the highest points

# Newest page get list post :

20 post get the latest time created

# PG : Paypal
