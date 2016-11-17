## adventure mode:
**goal: track the result of multiple games (matches), after the match the winner is shown and the player is given a leader board and prompt to play again**
##### throw = engagement; 2:3 engagements = bout; 2:3 bouts = match

I want to create a match function where if (computer || player === 2 bouts) {matchOver()}

1. create way to track engagements (i already have it)
--changed gameOver to boutOver and said that you lost the bout.  **I need to create a bout tracker/leaderboard**



2. create way to track bouts (playerBout and computerBout)
3. **goes into reset?**create boutOver() based off gameOver()
  a. will need to change the script a bit to say you lost the bout
4. if (computerBouts || playerBouts === 2){
boutOver()
}
5. create leader board in html and css
6. bout change score like game score
7. create matchOver() based off gameOver()
7. if('computerBout' || playerBout === 2){
matchOver()
}














## explorer mode
what i need to do:
define winning:
 -player chooses rock vs computer chooses

I first round
1. did player win?
  a. yes
    i. player score + 1
  b. no
    ii. computer score + 1
  c. drawn
    ii. No change
II Second round
1. did player win?
  a. yes
    i. player score + 1
  b. no
    ii. computer score + 1
  c. drawn
    ii. No change
III Third Round
1. did player win?
  a. yes
    i. player score + 1
  b. no
    ii. computer score + 1
  c. drawn
    ii. No change
IV Fourth Roundh
1. did player win?
  a. yes
    i. player score + 1
  b. no
    ii. computer score + 1
  c. drawn
    ii. No change
V Fifth Round
1. did player win?
  a. yes
    i. player score + 1
  b. no
    ii. computer score + 1
  c. drawn
    ii. No change
VI game over
