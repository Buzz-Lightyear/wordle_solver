# Wordle Solver
Code to solve [Wordle](https://www.nytimes.com/games/wordle/index.html)

# How it Works
- First go to the [Wordle website](https://www.nytimes.com/games/wordle/index.html) on NyTimes
- Hit `New Game` in `Wordle Solver`, it'll give you a starting word.
- Use that word in Wordle and report back the results.
- You report results by choosing a color for each letter that Wordle Solver suggested. This helps the Solver choose its next guess appropriately.

# Strategy
- Wordle Solver contains a list of all 5 letter english words.
- It chooses a word at random as its first guess.
- Based on the results from each guess, it filters down its list and repeats this process until the game ends.

# Future Improvements
- Validate that Next Word button can only be successfully hit when all colors are filled in for a row.
- A button to regenerate a specific guess
- Don't use words that contain repeated letters until you absolutely have to.
- Force single character per text area and auto tab to next one.
- When hitting backspace, jump between text areas.
- Wordle Solver always picks the most popular word for each guess
- Host Wordle as a game server wherein Bots can compete against each other over 50 games and the bot with the lowest average step count wins.
- Make UI responsive