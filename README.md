# TrainBot
Repo for TrainBot - Personal Trainer template website





Landing page
    -> Personal Trainer's Story
    -> Login

Login
    -> Login
        -> User (person utilizing PT's services)
        -> Admin (PT who is providing services)
    -> Register
        -> User
        -> Admin (icebox)

Conditional Login Pages
    -> User Account Creation
        First Page
            -> Username
            -> Password
            -> email
            -> phoneNumber
        Second Page
            -> Program Choices (with descriptions)
                -> Powerlifting
                -> Crossfit
                -> Row
            ->
    -> Admin Account Creation (icebox)

Personal Landing Page (User)
    -> Header Tabs / Hamburger
        -> Workout -- main page to 
        -> Profile
    -> Pages
        -> Workout (LANDING PAGE!!!!!!!!!!)
            -> Workout (front and center)
                -> Day number of program (upper left)
                -> Workout text
                    -> Link to Video
                -> Completed Workout btn -> sends POST to db to update screen on next login
                -> Notes btn -> opens up text box
            -> Carosel design? 
                -> 7 days? whatever seems legit
        -> Profile
            -> Update user info
            -> Badges (icebox)
            -> Current Program (at top) (LANDING PAGE!!!!!!!!!!)
                -> Progress bar
            -> Workout History (icebox)
            -> Initial Benchmark (icebox)
                -> 150lbs
                -> Goal add 50lbs by end of program


ADMIN Dashboard Page (PT)
    -> Header / Hamburger
        -> Client Table (expand button?)
            -> Client List
                -> Program Details
                -> Progress bar
                    -> Current Workout 
            -> Modal with client workout history (icebox)
            -> Individule Client Note Feed (icebox)
        -> All Client Note Feed (LANDING PAGE!!!!!!!!!!)
            -> blog post of recent notes in chronological order
                -> Client Name
                -> Program
                -> Day of Program
                    -> link to expand day's programming
                -> Note Text
        -> Programs
            -> Dropdown / List / Table of all PT's Programs
                -> List of every programmed day
                    -> edit button (icebox)
            -> Add new Program
                -> Form page
                    -> First Modal
                        -> Program Name
                        -> How many Days?
                        -> next btn
                    -> Second Modal
                        -> Day number (auto populate)
                        -> Text Box for programming
                        -> wells for each exercise (icebox)
                        -> next btn
                        -> back btn (icebox)
                -> Edit program (icebox)
Video Libary (icebox)
    -> Links to youtube vids