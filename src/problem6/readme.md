### Software Requirements

1. We have a website with a score board, which shows the top 10 user’s scores.
2. We want live update of the score board.
3. User can do an action (which we do not need to care what the action is), completing this action will increase the user’s score.
4. Upon completion the action will dispatch an API call to the application server to update the score.
5. We want to prevent malicious users from increasing scores without authorisation.

### Modules
1. Score Board
    1. Board Screen
        - F1: Render board view with 10 items
        - F2: Render item view of board
        - F3: Render user view of item
        - F4: Render score view of item
    2. Score data sync
        - F1: Fetch top 10 scores with userId
    3. User data sync
        - F1: Fetch new user info by userId
        - F2: Cache user info 
    4. Live update
        - F1: Repeat syncing new Score vs User data
        - F2: Repeat rendering Board Screen with new synced data 
2. Score Store (Storage service)
3. Score Hub (API service)
    