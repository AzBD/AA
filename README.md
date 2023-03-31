We are excited that you believe in our mission and consider it a possible home for you. This part of the interview process is designed to give you signal on the tech stack and the kind of problems we solve everyday, and for us to get signal on how you approach them, all while having fun with some code.

# The assignment

The goal of this assignment is to create a mini-app to deal cards at random from a deck of cards. Specifically:
- You should create a GraphQL API that can be used to get one card at a time at random from a deck of 52 regular playing cards.
- You should create a mobile page that lets a user call that API to get one card at a time, and display all the cards dealt so far.

Example of what the end user should see:
- The page starts empty except for a button to deal a card
- The user presses that button and one card (e.g "Ace of Hearts") is shown.
- The user presses the button again, and another card (e.g "Seven of Clubs" is shown next to the previous one "Ace of Hearts") and so on.
- The user can be dealt max of 52 cards, with all 52 being unique.

Some things to think about:
- The API definition
- How you will keep state of what cards are already dealt
- How the code may be organized
- How the cards should appear in the UX

# Starting point

In order to get started, we have created a "server" directory with basic Node + GraphQL server setup and a "mobile" directory with basic Expo + React-Native setup. You will most likely spend most of your time in the CardDealer files, but feel free to take a look and/or modify the rest of the skeleton code.

# Deliverables

Once finished:
- Commit your code to this repository (commit directly, no need to send a Pull Request)
- Schedule time with us to go review your approach afterwards: https://calendly.com/hamzaaftab/pl-intro

# Logistics

- Aim to spend no more than 3 hours on the assignment
- If you have questions, Hamza will be online at your pre-agreed upon time slot to answer them async. Feel free to send questions to Hamza over email and you should receive a quick reply.

# FAQs

**What if I have questions about what the ideal product behavior should be?** 
Feel free to make product assumptions that you think will make for a good user experience while keeping the technical complexity within reason. If you are truly blocked on a question, please feel free to ask over email.

**How much should I worry about design and look and feel of the app?**
Treat it as a low-fidelity early prototype of a feature. Functionality is more important than aesthetics.

**Can I change which frameworks are used or the tech stack?**
The tech stack provided is what we use, but we are totally fine with you using what you are most comfortable with, as long as the original intent of the deliverable is being met.

**Can I leverage and import useful modules as necessary?**
Yes

**I finished super early. Is there a bonus exercise?** 
This is strictly optional, but if you finish early and are excited to try out another challenge, see if you can allow the user to kill the app and come back to continue playing the deck of cards from the same state.

**Something is wrong with the setup and I can't figure out why the server or mobile app are not working. What should I do?**
We don't want you to spend your entire time debugging setup-related issues. If you have been stuck for >15 mins, reach out and we will try to unblock you as soon as possible.
