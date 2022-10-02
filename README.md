# YTHigher
A simple little YouTube guessing game created with JavaScript

You will be provided with 2 YouTube videos in front of you, and just by looking at their thumbnails and titles, you need to guess which video is more popular (Average views per day). If you guessed it right, you will get 10 points, otherwise you would need to restart. If you get a high score of more than 100, you have some serious skills.<br>
### <b >PS : Due to API Issues, it will take around 2-3 seconds for every round to load, so don't go spam clicking </b>

## Problems
- This program is being run on the Invidious api, which is relatively very slow. An alternative would be to just use the YouTube Data API which is much faster, but due to quota limit issues, the game can only be played 5000 times in a day (5000 rounds).
- The code sometimes randomly breaks due to an undefined youtube ID or connection timeout

## Updates for future
- [ ] Create another similar game, but this time to guess which youtuber is more popular
- [ ] Make UI Better
- [ ] Add a 10 second timer for every round
- [ ] Once player crosses score of 50, the time to complete each round will decrease
- [ ] Make loading speeds faster
