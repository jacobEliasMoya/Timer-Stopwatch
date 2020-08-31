// declaring timer app object

let timerApp = {

    mainFunction : undefined,
    timerSwicth: 0,
    swSwicth : 0,

    // function selection buttons
    selectButtons : {
        mainDiv : document.querySelector('.timer-type-selection'), 
        timerSelect : document.querySelector('.timer-type-selection .timer'), 
        stopwatchSelect : document.querySelector('.timer-type-selection .stopwatch'), 
        startStopSelect : document.querySelector('.timer-type-selection .start-stop') 


    },

    // decalring buttons to increment hours/minutes/seconds
    incrementButtons : {
        //declaring hour button
        hourUp : document.querySelector('.increment-buttons .hours'), 
        // declaring minute button
        minutesUp: document.querySelector('.increment-buttons .minutes'),
        //declaring seconds button
        secondsUp: document.querySelector('.increment-buttons .seconds')
    },
    

    // decalring buttons to decrement hours/minutes/seconds
    decrementButtons : {
        //declaring hour button
        hourDown : document.querySelector('.decrement-buttons .hours'),
        // declaring minute button
        minutesDown: document.querySelector('.decrement-buttons .minutes'),
        //declaring seconds button
        secondsDown: document.querySelector('.decrement-buttons .seconds'),
    
    },

    // storing elements that will act as display segments in a small object
    // ****each object will contain the first and seconds digit of the respective obj

    displaySegments : {
        // storing hours display segments into an object
        hours : {
            // *****first digit
            // vertical segments
            topLeftVert:document.querySelector('.hours .digit.one .vertical-lines .upper.lines .top-left-vertical'),
            topRightVert:document.querySelector('.hours   .digit.one .vertical-lines .upper.lines .top-right-vertical'),            
            bottomLeftVert:document.querySelector('.hours  .digit.one .vertical-lines .lower.lines .bottom-left-vertical'),
            bottomRightVert:document.querySelector('.hours .digit.one .vertical-lines .lower.lines .bottom-right-vertical'),            
            // horizontal segments
            topHorz: document.querySelector('.hours .digit.one .horizontal-lines .top-horizontal'),
            midHorz: document.querySelector('.hours .digit.one .horizontal-lines .middle-horizontal'),
            bottomHorz:document.querySelector('.hours .digit.one .horizontal-lines .bottom-horizontal'),
            // *****second digit
            topLeftVert2:document.querySelector('.hours .digit.two .vertical-lines .upper.lines .top-left-vertical'),
            topRightVert2:document.querySelector('.hours   .digit.two .vertical-lines .upper.lines .top-right-vertical'),            
            bottomLeftVert2:document.querySelector('.hours  .digit.two .vertical-lines .lower.lines .bottom-left-vertical'),
            bottomRightVert2:document.querySelector('.hours .digit.two .vertical-lines .lower.lines .bottom-right-vertical'),            
            // horizontal segments
            topHorz2: document.querySelector('.hours .digit.two .horizontal-lines .top-horizontal'),
            midHorz2: document.querySelector('.hours .digit.two .horizontal-lines .middle-horizontal'),
            bottomHorz2:document.querySelector('.hours .digit.two .horizontal-lines .bottom-horizontal')

        },
        // storing minutes display segments into an object
        minutes:{
            // *****first digit
            // vertical segments
            topLeftVert:document.querySelector('.minutes .digit.one .vertical-lines .upper.lines .top-left-vertical'),
            topRightVert:document.querySelector('.minutes   .digit.one .vertical-lines .upper.lines .top-right-vertical'),            
            bottomLeftVert:document.querySelector('.minutes  .digit.one .vertical-lines .lower.lines .bottom-left-vertical'),
            bottomRightVert:document.querySelector('.minutes .digit.one .vertical-lines .lower.lines .bottom-right-vertical'),            
            // horizontal segments
            topHorz: document.querySelector('.minutes .digit.one .horizontal-lines .top-horizontal'),
            midHorz: document.querySelector('.minutes .digit.one .horizontal-lines .middle-horizontal'),
            bottomHorz:document.querySelector('.minutes .digit.one .horizontal-lines .bottom-horizontal'),
            // *****second digit
            topLeftVert2:document.querySelector('.minutes .digit.two .vertical-lines .upper.lines .top-left-vertical'),
            topRightVert2:document.querySelector('.minutes   .digit.two .vertical-lines .upper.lines .top-right-vertical'),            
            bottomLeftVert2:document.querySelector('.minutes  .digit.two .vertical-lines .lower.lines .bottom-left-vertical'),
            bottomRightVert2:document.querySelector('.minutes .digit.two .vertical-lines .lower.lines .bottom-right-vertical'),            
            // horizontal segments
            topHorz2: document.querySelector('.minutes .digit.two .horizontal-lines .top-horizontal'),
            midHorz2: document.querySelector('.minutes .digit.two .horizontal-lines .middle-horizontal'),
            bottomHorz2:document.querySelector('.minutes .digit.two .horizontal-lines .bottom-horizontal')

        },
        // storing seconds display segments into an object
        seconds:{
            // *****first digit
            // vertical segments
            topLeftVert:document.querySelector('.seconds .digit.one .vertical-lines .upper.lines .top-left-vertical'),
            topRightVert:document.querySelector('.seconds   .digit.one .vertical-lines .upper.lines .top-right-vertical'),            
            bottomLeftVert:document.querySelector('.seconds  .digit.one .vertical-lines .lower.lines .bottom-left-vertical'),
            bottomRightVert:document.querySelector('.seconds .digit.one .vertical-lines .lower.lines .bottom-right-vertical'),            
            // horizontal segments
            topHorz: document.querySelector('.seconds .digit.one .horizontal-lines .top-horizontal'),
            midHorz: document.querySelector('.seconds .digit.one .horizontal-lines .middle-horizontal'),
            bottomHorz:document.querySelector('.seconds .digit.one .horizontal-lines .bottom-horizontal'),
            // *****second digit
            topLeftVert2:document.querySelector('.seconds .digit.two .vertical-lines .upper.lines .top-left-vertical'),
            topRightVert2:document.querySelector('.seconds   .digit.two .vertical-lines .upper.lines .top-right-vertical'),            
            bottomLeftVert2:document.querySelector('.seconds  .digit.two .vertical-lines .lower.lines .bottom-left-vertical'),
            bottomRightVert2:document.querySelector('.seconds .digit.two .vertical-lines .lower.lines .bottom-right-vertical'),            
            // horizontal segments
            topHorz2: document.querySelector('.seconds .digit.two .horizontal-lines .top-horizontal'),
            midHorz2: document.querySelector('.seconds .digit.two .horizontal-lines .middle-horizontal'),
            bottomHorz2:document.querySelector('.seconds .digit.two .horizontal-lines .bottom-horizontal')

        }
    },

    // hour/min/seconds to be used for various functions
    hour:0,
    minute:0,
    second:0,

    //assigning function of the app either timer/stopwatch fow now
    assignAppFunction(button){
        switch(button.innerHTML){
            case 'Timer':
                this.mainFunction = 'timer';
                break;
            case 'Stopwatch':
                this.mainFunction = 'stopwatch';
                break;
        }

        console.log(this.mainFunction);
    },


    //functions that will assign visuals of timer based off unit of time
    assignHourSegments(digit,num){
        switch(digit){
            case 1:
                switch(num){
                    case 0:
                        //coloring necessary segments
                        this.displaySegments.hours.topLeftVert2.style.background = 'white';
                        this.displaySegments.hours.topRightVert2.style.background = 'white';
                        this.displaySegments.hours.bottomLeftVert2.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert2.style.background = 'white';
                        this.displaySegments.hours.topHorz2.style.background = 'white';
                        this.displaySegments.hours.bottomHorz2.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.hours.midHorz2.style.background = 'purple';
                        break;
                    case 1:
                        //coloring necessary segments
                        this.displaySegments.hours.topRightVert2.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert2.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.hours.bottomLeftVert2.style.background = 'purple';
                        this.displaySegments.hours.topLeftVert2.style.background = 'purple';
                        this.displaySegments.hours.midHorz2.style.background = 'purple';
                        this.displaySegments.hours.topHorz2.style.background = 'purple';
                        this.displaySegments.hours.midHorz2.style.background = 'purple';
                        this.displaySegments.hours.bottomHorz2.style.background = 'purple';
                        break;
                    case 2:
                        //coloring necessary segments
                        this.displaySegments.hours.topRightVert2.style.background = 'white';
                        this.displaySegments.hours.bottomLeftVert2.style.background = 'white';
                        this.displaySegments.hours.topHorz2.style.background = 'white';
                        this.displaySegments.hours.midHorz2.style.background = 'white';
                        this.displaySegments.hours.bottomHorz2.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.hours.topLeftVert2.style.background = 'purple';
                        this.displaySegments.hours.bottomRightVert2.style.background = 'purple';

                        break;
                    case 3:
                        //coloring necessary segments
                        this.displaySegments.hours.topRightVert2.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert2.style.background = 'white';
                        this.displaySegments.hours.topHorz2.style.background = 'white';
                        this.displaySegments.hours.midHorz2.style.background = 'white';
                        this.displaySegments.hours.bottomHorz2.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.hours.topLeftVert2.style.background = 'purple';
                        this.displaySegments.hours.bottomLeftVert2.style.background = 'purple';
                        break;
                    case 4:
                        //coloring display segments
                        this.displaySegments.hours.topLeftVert2.style.background = 'white';
                        this.displaySegments.hours.topRightVert2.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert2.style.background = 'white';
                        this.displaySegments.hours.midHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.hours.topHorz2.style.background = 'purple';
                        this.displaySegments.hours.bottomHorz2.style.background = 'purple';
                        this.displaySegments.hours.bottomLeftVert2.style.background = 'purple';

                        break;
                    case 5:
                        //coloring display segments
                        this.displaySegments.hours.topLeftVert2.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert2.style.background = 'white';
                        this.displaySegments.hours.topHorz2.style.background = 'white';
                        this.displaySegments.hours.midHorz2.style.background = 'white';
                        this.displaySegments.hours.bottomHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.hours.topRightVert2.style.background = 'purple';
                        this.displaySegments.hours.bottomLeftVert2.style.background = 'purple';
                        break;
                    case 6:
                        //coloring display segments
                        this.displaySegments.hours.topLeftVert2.style.background = 'white';
                        this.displaySegments.hours.bottomLeftVert2.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert2.style.background = 'white';
                        this.displaySegments.hours.topHorz2.style.background = 'white';
                        this.displaySegments.hours.midHorz2.style.background = 'white';
                        this.displaySegments.hours.bottomHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.hours.topRightVert2.style.background = 'purple';

                        break;
                    case 7:
                        //coloring display segments
                        this.displaySegments.hours.topRightVert2.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert2.style.background = 'white';
                        this.displaySegments.hours.topHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.hours.topLeftVert2.style.background = 'purple';
                        this.displaySegments.hours.bottomLeftVert2.style.background = 'purple';
                        this.displaySegments.hours.midHorz2.style.background = 'purple';
                        this.displaySegments.hours.bottomHorz2.style.background = 'purple';

                        break;
                    case 8:
                        //coloring display segments
                        this.displaySegments.hours.topLeftVert2.style.background = 'white';
                        this.displaySegments.hours.topRightVert2.style.background = 'white';
                        this.displaySegments.hours.bottomLeftVert2.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert2.style.background = 'white';
                        this.displaySegments.hours.topHorz2.style.background = 'white';
                        this.displaySegments.hours.midHorz2.style.background = 'white';
                        this.displaySegments.hours.bottomHorz2.style.background = 'white';
                        break;
                    case 9:
                        //coloring display segments
                        this.displaySegments.hours.topLeftVert2.style.background = 'white';
                        this.displaySegments.hours.topRightVert2.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert2.style.background = 'white';
                        this.displaySegments.hours.topHorz2.style.background = 'white';
                        this.displaySegments.hours.midHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.hours.bottomHorz2.style.background = 'purple';
                        this.displaySegments.hours.bottomLeftVert2.style.background = 'purple';

                        break;
                        
                }
                break;
            case 2:
                switch(num){
                    case 0:
                        //coloring necessary segments
                        this.displaySegments.hours.topLeftVert.style.background = 'white';
                        this.displaySegments.hours.topRightVert.style.background = 'white';
                        this.displaySegments.hours.bottomLeftVert.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert.style.background = 'white';
                        this.displaySegments.hours.topHorz.style.background = 'white';
                        this.displaySegments.hours.bottomHorz.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.hours.midHorz.style.background = 'purple';
                        break;
                        case 1:
                        //coloring necessary segments
                        this.displaySegments.hours.topRightVert.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.hours.bottomLeftVert.style.background = 'purple';
                        this.displaySegments.hours.topLeftVert.style.background = 'purple';
                        this.displaySegments.hours.midHorz.style.background = 'purple';
                        this.displaySegments.hours.topHorz.style.background = 'purple';
                        this.displaySegments.hours.midHorz.style.background = 'purple';
                        this.displaySegments.hours.bottomHorz.style.background = 'purple';



                        break;
                    case 2:
                        //coloring necessary segments
                        this.displaySegments.hours.topRightVert.style.background = 'white';
                        this.displaySegments.hours.bottomLeftVert.style.background = 'white';
                        this.displaySegments.hours.topHorz.style.background = 'white';
                        this.displaySegments.hours.midHorz.style.background = 'white';
                        this.displaySegments.hours.bottomHorz.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.hours.topLeftVert.style.background = 'purple';
                        this.displaySegments.hours.bottomRightVert.style.background = 'purple';

                        break;
                    case 3:
                        //coloring necessary segments
                        this.displaySegments.hours.topRightVert.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert.style.background = 'white';
                        this.displaySegments.hours.topHorz.style.background = 'white';
                        this.displaySegments.hours.midHorz.style.background = 'white';
                        this.displaySegments.hours.bottomHorz.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.hours.topLeftVert.style.background = 'purple';
                        this.displaySegments.hours.bottomLeftVert.style.background = 'purple';
                        break;
                    case 4:
                        //coloring display segments
                        this.displaySegments.hours.topLeftVert.style.background = 'white';
                        this.displaySegments.hours.topRightVert.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert.style.background = 'white';
                        this.displaySegments.hours.midHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.hours.topHorz.style.background = 'purple';
                        this.displaySegments.hours.bottomHorz.style.background = 'purple';
                        this.displaySegments.hours.bottomLeftVert.style.background = 'purple';
                        

                        break;
                    case 5:
                        //coloring display segments
                        this.displaySegments.hours.topLeftVert.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert.style.background = 'white';
                        this.displaySegments.hours.topHorz.style.background = 'white';
                        this.displaySegments.hours.midHorz.style.background = 'white';
                        this.displaySegments.hours.bottomHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.hours.topRightVert.style.background = 'purple';
                        this.displaySegments.hours.bottomLeftVert.style.background = 'purple';

                        break;
                    case 6:
                        //coloring display segments
                        this.displaySegments.hours.topLeftVert.style.background = 'white';
                        this.displaySegments.hours.bottomLeftVert.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert.style.background = 'white';
                        this.displaySegments.hours.topHorz.style.background = 'white';
                        this.displaySegments.hours.midHorz.style.background = 'white';
                        this.displaySegments.hours.bottomHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.hours.topRightVert.style.background = 'purple';

                        break;
                    case 7:
                        //coloring display segments
                        this.displaySegments.hours.topRightVert.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert.style.background = 'white';
                        this.displaySegments.hours.topHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.hours.topLeftVert.style.background = 'purple';
                        this.displaySegments.hours.bottomLeftVert.style.background = 'purple';
                        this.displaySegments.hours.midHorz.style.background = 'purple';
                        this.displaySegments.hours.bottomHorz.style.background = 'purple';

                        break;
                    case 8:
                        //coloring display segments
                        this.displaySegments.hours.topLeftVert.style.background = 'white';
                        this.displaySegments.hours.topRightVert.style.background = 'white';
                        this.displaySegments.hours.bottomLeftVert.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert.style.background = 'white';
                        this.displaySegments.hours.topHorz.style.background = 'white';
                        this.displaySegments.hours.midHorz.style.background = 'white';
                        this.displaySegments.hours.bottomHorz.style.background = 'white';
                        break;
                    case 9:
                        //coloring display segments
                        this.displaySegments.hours.topLeftVert.style.background = 'white';
                        this.displaySegments.hours.topRightVert.style.background = 'white';
                        this.displaySegments.hours.bottomRightVert.style.background = 'white';
                        this.displaySegments.hours.topHorz.style.background = 'white';
                        this.displaySegments.hours.midHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.hours.bottomHorz.style.background = 'purple';
                        this.displaySegments.hours.bottomLeftVert.style.background = 'purple';

                        break;
                        
                }
                break;
        }
    },
    assignMinuteSegments(digit,num){
        switch(digit){
            case 1:
                switch(num){
                    case 0:
                        //coloring necessary segments
                        this.displaySegments.minutes.topLeftVert2.style.background = 'white';
                        this.displaySegments.minutes.topRightVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomLeftVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert2.style.background = 'white';
                        this.displaySegments.minutes.topHorz2.style.background = 'white';
                        this.displaySegments.minutes.bottomHorz2.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.minutes.midHorz2.style.background = 'purple';
                        break;
                    case 1:
                        //coloring necessary segments
                        this.displaySegments.minutes.topRightVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert2.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.minutes.bottomLeftVert2.style.background = 'purple';
                        this.displaySegments.minutes.topLeftVert2.style.background = 'purple';
                        this.displaySegments.minutes.midHorz2.style.background = 'purple';
                        this.displaySegments.minutes.topHorz2.style.background = 'purple';
                        this.displaySegments.minutes.midHorz2.style.background = 'purple';
                        this.displaySegments.minutes.bottomHorz2.style.background = 'purple';
                        break;
                    case 2:
                        //coloring necessary segments
                        this.displaySegments.minutes.topRightVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomLeftVert2.style.background = 'white';
                        this.displaySegments.minutes.topHorz2.style.background = 'white';
                        this.displaySegments.minutes.midHorz2.style.background = 'white';
                        this.displaySegments.minutes.bottomHorz2.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.minutes.topLeftVert2.style.background = 'purple';
                        this.displaySegments.minutes.bottomRightVert2.style.background = 'purple';

                        break;
                    case 3:
                        //coloring necessary segments
                        this.displaySegments.minutes.topRightVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert2.style.background = 'white';
                        this.displaySegments.minutes.topHorz2.style.background = 'white';
                        this.displaySegments.minutes.midHorz2.style.background = 'white';
                        this.displaySegments.minutes.bottomHorz2.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.minutes.topLeftVert2.style.background = 'purple';
                        this.displaySegments.minutes.bottomLeftVert2.style.background = 'purple';
                        break;
                    case 4:
                        //coloring display segments
                        this.displaySegments.minutes.topLeftVert2.style.background = 'white';
                        this.displaySegments.minutes.topRightVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert2.style.background = 'white';
                        this.displaySegments.minutes.midHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.minutes.topHorz2.style.background = 'purple';
                        this.displaySegments.minutes.bottomHorz2.style.background = 'purple';
                        this.displaySegments.minutes.bottomLeftVert2.style.background = 'purple';

                        break;
                    case 5:
                        //coloring display segments
                        this.displaySegments.minutes.topLeftVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert2.style.background = 'white';
                        this.displaySegments.minutes.topHorz2.style.background = 'white';
                        this.displaySegments.minutes.midHorz2.style.background = 'white';
                        this.displaySegments.minutes.bottomHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.minutes.topRightVert2.style.background = 'purple';
                        this.displaySegments.minutes.bottomLeftVert2.style.background = 'purple';
                        break;
                    case 6:
                        //coloring display segments
                        this.displaySegments.minutes.topLeftVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomLeftVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert2.style.background = 'white';
                        this.displaySegments.minutes.topHorz2.style.background = 'white';
                        this.displaySegments.minutes.midHorz2.style.background = 'white';
                        this.displaySegments.minutes.bottomHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.minutes.topRightVert2.style.background = 'purple';

                        break;
                    case 7:
                        //coloring display segments
                        this.displaySegments.minutes.topRightVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert2.style.background = 'white';
                        this.displaySegments.minutes.topHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.minutes.topLeftVert2.style.background = 'purple';
                        this.displaySegments.minutes.bottomLeftVert2.style.background = 'purple';
                        this.displaySegments.minutes.midHorz2.style.background = 'purple';
                        this.displaySegments.minutes.bottomHorz2.style.background = 'purple';

                        break;
                    case 8:
                        //coloring display segments
                        this.displaySegments.minutes.topLeftVert2.style.background = 'white';
                        this.displaySegments.minutes.topRightVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomLeftVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert2.style.background = 'white';
                        this.displaySegments.minutes.topHorz2.style.background = 'white';
                        this.displaySegments.minutes.midHorz2.style.background = 'white';
                        this.displaySegments.minutes.bottomHorz2.style.background = 'white';
                        break;
                    case 9:
                        //coloring display segments
                        this.displaySegments.minutes.topLeftVert2.style.background = 'white';
                        this.displaySegments.minutes.topRightVert2.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert2.style.background = 'white';
                        this.displaySegments.minutes.topHorz2.style.background = 'white';
                        this.displaySegments.minutes.midHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.minutes.bottomHorz2.style.background = 'purple';
                        this.displaySegments.minutes.bottomLeftVert2.style.background = 'purple';

                        break;
                        
                }
                break;
            case 2:
                switch(num){
                    case 0:
                        //coloring necessary segments
                        this.displaySegments.minutes.topLeftVert.style.background = 'white';
                        this.displaySegments.minutes.topRightVert.style.background = 'white';
                        this.displaySegments.minutes.bottomLeftVert.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert.style.background = 'white';
                        this.displaySegments.minutes.topHorz.style.background = 'white';
                        this.displaySegments.minutes.bottomHorz.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.minutes.midHorz.style.background = 'purple';
                        break;
                        case 1:
                        //coloring necessary segments
                        this.displaySegments.minutes.topRightVert.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.minutes.bottomLeftVert.style.background = 'purple';
                        this.displaySegments.minutes.topLeftVert.style.background = 'purple';
                        this.displaySegments.minutes.midHorz.style.background = 'purple';
                        this.displaySegments.minutes.topHorz.style.background = 'purple';
                        this.displaySegments.minutes.midHorz.style.background = 'purple';
                        this.displaySegments.minutes.bottomHorz.style.background = 'purple';



                        break;
                    case 2:
                        //coloring necessary segments
                        this.displaySegments.minutes.topRightVert.style.background = 'white';
                        this.displaySegments.minutes.bottomLeftVert.style.background = 'white';
                        this.displaySegments.minutes.topHorz.style.background = 'white';
                        this.displaySegments.minutes.midHorz.style.background = 'white';
                        this.displaySegments.minutes.bottomHorz.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.minutes.topLeftVert.style.background = 'purple';
                        this.displaySegments.minutes.bottomRightVert.style.background = 'purple';

                        break;
                    case 3:
                        //coloring necessary segments
                        this.displaySegments.minutes.topRightVert.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert.style.background = 'white';
                        this.displaySegments.minutes.topHorz.style.background = 'white';
                        this.displaySegments.minutes.midHorz.style.background = 'white';
                        this.displaySegments.minutes.bottomHorz.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.minutes.topLeftVert.style.background = 'purple';
                        this.displaySegments.minutes.bottomLeftVert.style.background = 'purple';
                        break;
                    case 4:
                        //coloring display segments
                        this.displaySegments.minutes.topLeftVert.style.background = 'white';
                        this.displaySegments.minutes.topRightVert.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert.style.background = 'white';
                        this.displaySegments.minutes.midHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.minutes.topHorz.style.background = 'purple';
                        this.displaySegments.minutes.bottomHorz.style.background = 'purple';
                        this.displaySegments.minutes.bottomLeftVert.style.background = 'purple';
                        

                        break;
                    case 5:
                        //coloring display segments
                        this.displaySegments.minutes.topLeftVert.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert.style.background = 'white';
                        this.displaySegments.minutes.topHorz.style.background = 'white';
                        this.displaySegments.minutes.midHorz.style.background = 'white';
                        this.displaySegments.minutes.bottomHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.minutes.topRightVert.style.background = 'purple';
                        this.displaySegments.minutes.bottomLeftVert.style.background = 'purple';

                        break;
                    case 6:
                        //coloring display segments
                        this.displaySegments.minutes.topLeftVert.style.background = 'white';
                        this.displaySegments.minutes.bottomLeftVert.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert.style.background = 'white';
                        this.displaySegments.minutes.topHorz.style.background = 'white';
                        this.displaySegments.minutes.midHorz.style.background = 'white';
                        this.displaySegments.minutes.bottomHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.minutes.topRightVert.style.background = 'purple';

                        break;
                    case 7:
                        //coloring display segments
                        this.displaySegments.minutes.topRightVert.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert.style.background = 'white';
                        this.displaySegments.minutes.topHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.minutes.topLeftVert.style.background = 'purple';
                        this.displaySegments.minutes.bottomLeftVert.style.background = 'purple';
                        this.displaySegments.minutes.midHorz.style.background = 'purple';
                        this.displaySegments.minutes.bottomHorz.style.background = 'purple';

                        break;
                    case 8:
                        //coloring display segments
                        this.displaySegments.minutes.topLeftVert.style.background = 'white';
                        this.displaySegments.minutes.topRightVert.style.background = 'white';
                        this.displaySegments.minutes.bottomLeftVert.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert.style.background = 'white';
                        this.displaySegments.minutes.topHorz.style.background = 'white';
                        this.displaySegments.minutes.midHorz.style.background = 'white';
                        this.displaySegments.minutes.bottomHorz.style.background = 'white';
                        break;
                    case 9:
                        //coloring display segments
                        this.displaySegments.minutes.topLeftVert.style.background = 'white';
                        this.displaySegments.minutes.topRightVert.style.background = 'white';
                        this.displaySegments.minutes.bottomRightVert.style.background = 'white';
                        this.displaySegments.minutes.topHorz.style.background = 'white';
                        this.displaySegments.minutes.midHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.minutes.bottomHorz.style.background = 'purple';
                        this.displaySegments.minutes.bottomLeftVert.style.background = 'purple';

                        break;
                        
                }
                break;
        }
    },
    assignSecondSegments(digit,num){
        switch(digit){
            case 1:
                switch(num){
                    case 0:
                        //coloring necessary segments
                        this.displaySegments.seconds.topLeftVert2.style.background = 'white';
                        this.displaySegments.seconds.topRightVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomLeftVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert2.style.background = 'white';
                        this.displaySegments.seconds.topHorz2.style.background = 'white';
                        this.displaySegments.seconds.bottomHorz2.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.seconds.midHorz2.style.background = 'purple';
                        break;
                        case 1:
                        //coloring necessary segments
                        this.displaySegments.seconds.topRightVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert2.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.seconds.bottomLeftVert2.style.background = 'purple';
                        this.displaySegments.seconds.topLeftVert2.style.background = 'purple';
                        this.displaySegments.seconds.midHorz2.style.background = 'purple';
                        this.displaySegments.seconds.topHorz2.style.background = 'purple';
                        this.displaySegments.seconds.midHorz2.style.background = 'purple';
                        this.displaySegments.seconds.bottomHorz2.style.background = 'purple';
                        break;
                    case 2:
                        //coloring necessary segments
                        this.displaySegments.seconds.topRightVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomLeftVert2.style.background = 'white';
                        this.displaySegments.seconds.topHorz2.style.background = 'white';
                        this.displaySegments.seconds.midHorz2.style.background = 'white';
                        this.displaySegments.seconds.bottomHorz2.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.seconds.topLeftVert2.style.background = 'purple';
                        this.displaySegments.seconds.bottomRightVert2.style.background = 'purple';

                        break;
                    case 3:
                        //coloring necessary segments
                        this.displaySegments.seconds.topRightVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert2.style.background = 'white';
                        this.displaySegments.seconds.topHorz2.style.background = 'white';
                        this.displaySegments.seconds.midHorz2.style.background = 'white';
                        this.displaySegments.seconds.bottomHorz2.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.seconds.topLeftVert2.style.background = 'purple';
                        this.displaySegments.seconds.bottomLeftVert2.style.background = 'purple';
                        break;
                    case 4:
                        //coloring display segments
                        this.displaySegments.seconds.topLeftVert2.style.background = 'white';
                        this.displaySegments.seconds.topRightVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert2.style.background = 'white';
                        this.displaySegments.seconds.midHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.seconds.topHorz2.style.background = 'purple';
                        this.displaySegments.seconds.bottomHorz2.style.background = 'purple';
                        this.displaySegments.seconds.bottomLeftVert2.style.background = 'purple';

                        break;
                    case 5:
                        //coloring display segments
                        this.displaySegments.seconds.topLeftVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert2.style.background = 'white';
                        this.displaySegments.seconds.topHorz2.style.background = 'white';
                        this.displaySegments.seconds.midHorz2.style.background = 'white';
                        this.displaySegments.seconds.bottomHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.seconds.topRightVert2.style.background = 'purple';
                        this.displaySegments.seconds.bottomLeftVert2.style.background = 'purple';

                        break;
                    case 6:
                        //coloring display segments
                        this.displaySegments.seconds.topLeftVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomLeftVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert2.style.background = 'white';
                        this.displaySegments.seconds.topHorz2.style.background = 'white';
                        this.displaySegments.seconds.midHorz2.style.background = 'white';
                        this.displaySegments.seconds.bottomHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.seconds.topRightVert2.style.background = 'purple';

                        break;
                    case 7:
                        //coloring display segments
                        this.displaySegments.seconds.topRightVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert2.style.background = 'white';
                        this.displaySegments.seconds.topHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.seconds.topLeftVert2.style.background = 'purple';
                        this.displaySegments.seconds.bottomLeftVert2.style.background = 'purple';
                        this.displaySegments.seconds.midHorz2.style.background = 'purple';
                        this.displaySegments.seconds.bottomHorz2.style.background = 'purple';

                        break;
                    case 8:
                        //coloring display segments
                        this.displaySegments.seconds.topLeftVert2.style.background = 'white';
                        this.displaySegments.seconds.topRightVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomLeftVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert2.style.background = 'white';
                        this.displaySegments.seconds.topHorz2.style.background = 'white';
                        this.displaySegments.seconds.midHorz2.style.background = 'white';
                        this.displaySegments.seconds.bottomHorz2.style.background = 'white';
                        break;
                    case 9:
                        //coloring display segments
                        this.displaySegments.seconds.topLeftVert2.style.background = 'white';
                        this.displaySegments.seconds.topRightVert2.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert2.style.background = 'white';
                        this.displaySegments.seconds.topHorz2.style.background = 'white';
                        this.displaySegments.seconds.midHorz2.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.seconds.bottomHorz2.style.background = 'purple';
                        this.displaySegments.seconds.bottomLeftVert2.style.background = 'purple';

                        break;
                        
                }
                break;
            case 2:
                switch(num){
                    case 0:
                        //coloring necessary segments
                        this.displaySegments.seconds.topLeftVert.style.background = 'white';
                        this.displaySegments.seconds.topRightVert.style.background = 'white';
                        this.displaySegments.seconds.bottomLeftVert.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert.style.background = 'white';
                        this.displaySegments.seconds.topHorz.style.background = 'white';
                        this.displaySegments.seconds.bottomHorz.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.seconds.midHorz.style.background = 'purple';
                        break;
                        case 1:
                        //coloring necessary segments
                        this.displaySegments.seconds.topRightVert.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.seconds.bottomLeftVert.style.background = 'purple';
                        this.displaySegments.seconds.topLeftVert.style.background = 'purple';
                        this.displaySegments.seconds.midHorz.style.background = 'purple';
                        this.displaySegments.seconds.topHorz.style.background = 'purple';
                        this.displaySegments.seconds.midHorz.style.background = 'purple';
                        this.displaySegments.seconds.bottomHorz.style.background = 'purple';

                        break;
                    case 2:
                        //coloring necessary segments
                        this.displaySegments.seconds.topRightVert.style.background = 'white';
                        this.displaySegments.seconds.bottomLeftVert.style.background = 'white';
                        this.displaySegments.seconds.topHorz.style.background = 'white';
                        this.displaySegments.seconds.midHorz.style.background = 'white';
                        this.displaySegments.seconds.bottomHorz.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.seconds.topLeftVert.style.background = 'purple';
                        this.displaySegments.seconds.bottomRightVert.style.background = 'purple';

                        break;
                    case 3:
                        //coloring necessary segments
                        this.displaySegments.seconds.topRightVert.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert.style.background = 'white';
                        this.displaySegments.seconds.topHorz.style.background = 'white';
                        this.displaySegments.seconds.midHorz.style.background = 'white';
                        this.displaySegments.seconds.bottomHorz.style.background = 'white';
                        // filling segments back with custom purple
                        this.displaySegments.seconds.topLeftVert.style.background = 'purple';
                        this.displaySegments.seconds.bottomLeftVert.style.background = 'purple';
                        break;
                    case 4:
                        //coloring display segments
                        this.displaySegments.seconds.topLeftVert.style.background = 'white';
                        this.displaySegments.seconds.topRightVert.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert.style.background = 'white';
                        this.displaySegments.seconds.midHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.seconds.topHorz.style.background = 'purple';
                        this.displaySegments.seconds.bottomHorz.style.background = 'purple';
                        this.displaySegments.seconds.bottomLeftVert.style.background = 'purple';
                        

                        break;
                    case 5:
                        //coloring display segments
                        this.displaySegments.seconds.topLeftVert.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert.style.background = 'white';
                        this.displaySegments.seconds.topHorz.style.background = 'white';
                        this.displaySegments.seconds.midHorz.style.background = 'white';
                        this.displaySegments.seconds.bottomHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.seconds.topRightVert.style.background = 'purple';
                        this.displaySegments.seconds.bottomLeftVert.style.background = 'purple';

                        break;
                    case 6:
                        //coloring display segments
                        this.displaySegments.seconds.topLeftVert.style.background = 'white';
                        this.displaySegments.seconds.bottomLeftVert.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert.style.background = 'white';
                        this.displaySegments.seconds.topHorz.style.background = 'white';
                        this.displaySegments.seconds.midHorz.style.background = 'white';
                        this.displaySegments.seconds.bottomHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.seconds.topRightVert.style.background = 'purple';

                        break;
                    case 7:
                        //coloring display segments
                        this.displaySegments.seconds.topRightVert.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert.style.background = 'white';
                        this.displaySegments.seconds.topHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.seconds.topLeftVert.style.background = 'purple';
                        this.displaySegments.seconds.bottomLeftVert.style.background = 'purple';
                        this.displaySegments.seconds.midHorz.style.background = 'purple';
                        this.displaySegments.seconds.bottomHorz.style.background = 'purple';

                        break;
                    case 8:
                        //coloring display segments
                        this.displaySegments.seconds.topLeftVert.style.background = 'white';
                        this.displaySegments.seconds.topRightVert.style.background = 'white';
                        this.displaySegments.seconds.bottomLeftVert.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert.style.background = 'white';
                        this.displaySegments.seconds.topHorz.style.background = 'white';
                        this.displaySegments.seconds.midHorz.style.background = 'white';
                        this.displaySegments.seconds.bottomHorz.style.background = 'white';
                        break;
                    case 9:
                        //coloring display segments
                        this.displaySegments.seconds.topLeftVert.style.background = 'white';
                        this.displaySegments.seconds.topRightVert.style.background = 'white';
                        this.displaySegments.seconds.bottomRightVert.style.background = 'white';
                        this.displaySegments.seconds.topHorz.style.background = 'white';
                        this.displaySegments.seconds.midHorz.style.background = 'white';
                        //filling segments back in with custom purple
                        this.displaySegments.seconds.bottomHorz.style.background = 'purple';
                        this.displaySegments.seconds.bottomLeftVert.style.background = 'purple';

                        break;
                        
                }
                break;
        }
    },


    over60min(){
        if(this.minute >= 60){
            this.minute=0;
            this.incrementHour();
            this.assignMinuteSegments(1,0);
            this.assignMinuteSegments(2,0);

        }
    },
    over60Sec(){
        if(this.second >= 60){
            this.second=0;
            this.incrementMin();
            this.assignSecondSegments(1,0);
            this.assignSecondSegments(2,0);

        }
    },
    over60MilSec(){
        if(this.second >= 100){
            this.second=0;
            this.incrementMin();
            this.assignSecondSegments(1,0);
            this.assignSecondSegments(2,0);

        }
    },
    timeDecrement(){
        if(this.hour > 0){
            if(this.minute === 0){
                if(this.second > 0){
                } else {
                    this.decrementHour();
                    this.minute=60;
                }
            }
        } 

        if(this.minute > 0){
            if(this.second === 0){
                this.decrementMin();
                this.second=60;
            } 
        }
    },

    // functions to increment respective unit of time
    incrementHour(){
        if(this.hour<9){
            this.hour++;
            this.assignHourSegments(2,0);
            this.assignHourSegments(1,this.hour);
            console.log(this.hour)

        } else {
            this.hour++;
            let hourString = this.hour.toString();
            console.log(hourString);
            
            let digit1=hourString[1];
            let digit2=hourString[0];
            this.assignHourSegments(2,parseInt(digit2));
            this.assignHourSegments(1,parseInt(digit1));
            console.log(this.hour)

        }
    },
    incrementMin(){
        if(this.minute<9){
            this.minute++;
            this.assignMinuteSegments(2,0);
            this.assignMinuteSegments(1,this.minute);

        } else {
            this.minute++;
            let minString = this.minute.toString();
            let digit1=minString[0];
            let digit2=minString[1];

            this.assignMinuteSegments(2,parseInt(digit1));
            this.assignMinuteSegments(1,parseInt(digit2));
        }
        this.over60min();
    },
    incrementSec(){
        if(this.second<9){
            this.second++;
            this.assignSecondSegments(2,0);
            this.assignSecondSegments(1,this.second);

        } else {
            this.second++;
            let secondString = this.second.toString();
            let digit1=secondString[0];
            let digit2=secondString[1];

            this.assignSecondSegments(2,parseInt(digit1));
            this.assignSecondSegments(1,parseInt(digit2));
        }
        this.over60Sec();
    },
    incrementMilSec(){
        if(this.second<9){
            this.second++;
            this.assignSecondSegments(2,0);
            this.assignSecondSegments(1,this.second);

        } else {
            this.second++;
            let secondString = this.second.toString();
            let digit1=secondString[0];
            let digit2=secondString[1];

            this.assignSecondSegments(2,parseInt(digit1));
            this.assignSecondSegments(1,parseInt(digit2));
        }
        this.over60MilSec();
    },


    // functions to decrement respective unit of time

    decrementHour(){
        let curHour = this.hour;
        
        if(curHour>0){
            if(curHour>10){ 
                curHour--;
                let hourString = curHour.toString();
                let digit1=hourString[0];
                let digit2=hourString[1]; 
                this.assignHourSegments(2,parseInt(digit1));
                this.assignHourSegments(1,parseInt(digit2));
                this.hour=curHour;

    
            } else {
                curHour--;
                this.assignHourSegments(2,0);
                this.assignHourSegments(1,curHour);
                this.hour=curHour;

            }

        }
    },
    decrementMin(){
        let curMin = this.minute;

        if(curMin>0){
            if(curMin>10){ 
                curMin--;
                let minString = curMin.toString();
                let digit1=minString[0];
                let digit2=minString[1]; 
                this.assignMinuteSegments(2,parseInt(digit1));
                this.assignMinuteSegments(1,parseInt(digit2));
                this.minute=curMin;
    
            } else {
                curMin--;
                this.assignMinuteSegments(2,0);
                this.assignMinuteSegments(1,curMin);
                this.minute=curMin;
            }
        } 
    },
    decrementSec(){
        let curSec = this.second;


        if(curSec>0){
            if(curSec>10){ 
                curSec--;
                let secString = curSec.toString();
                let digit1=secString[0];
                let digit2=secString[1]; 
                this.assignSecondSegments(2,parseInt(digit1));
                this.assignSecondSegments(1,parseInt(digit2));
                this.second=curSec;
    
            } else {
                curSec--;
                this.assignSecondSegments(2,0);
                this.assignSecondSegments(1,curSec);
                this.second=curSec;
            }
        } 

    },
    

    //method to be used for setting interval in future method
    stopWatchInterval(){
        timerApp.incrementMilSec();
    },
    
    timeUp(){
        if(this.second<1 && this.minute<1 && this.hour<1){
            alert("Times up!");
            clearInterval(this.inc2);

        } else {
        }
    },

    timerInterval(){
        timerApp.timeUp();
        timerApp.timeDecrement();
        timerApp.decrementSec();

    },

    //setting values within object to store data to be accessed (2) variations of count/intervals
    
    gCount: 0,
    gCount2: 0,
    inc: 0,
    inc2: 0,
    switchCount: 0,
    switchCount2: 0,

    mainStartFuction(){
        switch(this.mainFunction){
            case 'stopwatch':
                if(this.switchCount<1){
                    this.selectButtons.timerSelect.style.boxShadow ='none';
                    this.selectButtons.mainDiv.style.marginBottom ='3.5rem';
                    this.incrementButtons.hourUp.style.display='none';
                    this.incrementButtons.minutesUp.style.display='none';
                    this.incrementButtons.secondsUp.style.display='none';
                    this.decrementButtons.hourDown.style.display='none';
                    this.decrementButtons.minutesDown.style.display='none';
                    this.decrementButtons.secondsDown.style.display='none';
                    this.selectButtons.timerSelect.style.display ='none';
                    this.switchCount++;
                    
                } else {
                    this.selectButtons.timerSelect.style.boxShadow ='';
                    this.selectButtons.mainDiv.style.marginBottom ='';
                    this.incrementButtons.hourUp.style.display='';
                    this.incrementButtons.minutesUp.style.display='';
                    this.incrementButtons.secondsUp.style.display='';
                    this.decrementButtons.hourDown.style.display='';
                    this.decrementButtons.minutesDown.style.display='';
                    this.decrementButtons.secondsDown.style.display='';
                    this.selectButtons.timerSelect.style.display ='';
                    this.switchCount=0;

                }
                break;
            case 'timer':

                if(this.switchCount2<1){
                    // this.selectButtons.timerSelect.style.boxShadow ='0 0 2rem white';
                    this.selectButtons.mainDiv.style.marginBottom ='';
                    this.incrementButtons.hourUp.style.display='';
                    this.incrementButtons.minutesUp.style.display='';
                    this.incrementButtons.secondsUp.style.display='';
                    this.decrementButtons.hourDown.style.display='';
                    this.decrementButtons.minutesDown.style.display='';
                    this.decrementButtons.secondsDown.style.display='';
                    this.selectButtons.stopwatchSelect.style.display ='none';
                    this.switchCount2++;
                } else {
                    this.selectButtons.timerSelect.style.boxShadow ='';
                    this.selectButtons.mainDiv.style.marginBottom ='';
                    this.incrementButtons.hourUp.style.display='';
                    this.incrementButtons.minutesUp.style.display='';
                    this.incrementButtons.secondsUp.style.display='';
                    this.decrementButtons.hourDown.style.display='';
                    this.decrementButtons.minutesDown.style.display='';
                    this.decrementButtons.secondsDown.style.display='';
                    this.selectButtons.stopwatchSelect.style.display ='';
                    this.switchCount2=0;

                }
                break;
        }
    },
    
    beginCount(func){
        if(this.gCount>0){
            clearInterval(this.inc);
            this.gCount=0;
            timerApp.selectButtons.startStopSelect.innerHTML='Start';

        } else {
            while(this.gCount<1){
                this.inc = setInterval(func,10);
                this.gCount++;
                timerApp.selectButtons.startStopSelect.innerHTML='Stop'
                
            }
        }

    },

    beginTimerCount(func){
        if(this.gCount2>0){
            clearInterval(this.inc2);
            this.gCount2=0;
            timerApp.selectButtons.startStopSelect.innerHTML='Start';

        } else {
            while(this.gCount2<1){
                this.inc2 = setInterval(func,1000);
                this.gCount2++;
                timerApp.selectButtons.startStopSelect.innerHTML='Stop';
            }
        }

    },

    zeroDisplay(){
        timerApp.hour =0;
        timerApp.minute =0;
        timerApp.second =0;
        timerApp.assignHourSegments(1,timerApp.hour)
        timerApp.assignHourSegments(2,timerApp.hour)
        timerApp.assignMinuteSegments(1,timerApp.minute)
        timerApp.assignMinuteSegments(2,timerApp.minute)
        timerApp.assignSecondSegments(1,timerApp.second)
        timerApp.assignSecondSegments(2,timerApp.second)
    }
}

//end of object

///////////////////////////////////////////////////////////////////////

//begin event listeners
timerApp.incrementButtons.hourUp.addEventListener('click',()=>{
    timerApp.incrementHour();
})
timerApp.incrementButtons.minutesUp.addEventListener('click',()=>{
    timerApp.incrementMin();
})
timerApp.incrementButtons.secondsUp.addEventListener('click',()=>{
    timerApp.incrementSec();

})


//decrement event listeners
timerApp.decrementButtons.hourDown.addEventListener('click',()=>{
    timerApp.decrementHour();
})
timerApp.decrementButtons.minutesDown.addEventListener('click',()=>{
    timerApp.timeDecrement();
    timerApp.decrementMin();
})
timerApp.decrementButtons.secondsDown.addEventListener('click',()=>{
    // MAKE SURE THAT THIS ORDER OF OP STAYS THE SAME
    timerApp.timeDecrement();
    timerApp.decrementSec();
})


//start stop button
timerApp.selectButtons.startStopSelect.addEventListener('click',()=>{
    switch(timerApp.mainFunction){
        case 'timer':
            if(timerApp.switchCount2 === 0){
                clearInterval(timerApp.inc2)
            } else {
                timerApp.beginTimerCount(timerApp.timerInterval);
            }
            break;
        case 'stopwatch':
            if(timerApp.switchCount === 0){
                clearInterval(timerApp.inc)
            } else {
                timerApp.beginCount(timerApp.stopWatchInterval);
            }
        }
})
timerApp.selectButtons.timerSelect.addEventListener('click',()=>{
    timerApp.assignAppFunction(timerApp.selectButtons.timerSelect);
    timerApp.mainStartFuction();
    timerApp.zeroDisplay();

})
timerApp.selectButtons.stopwatchSelect.addEventListener('click',()=>{
    timerApp.assignAppFunction(timerApp.selectButtons.stopwatchSelect);
    timerApp.mainStartFuction();
    timerApp.zeroDisplay();
})

// small code script to alert user of basic instruction
let x=0
window.addEventListener('mouseover',()=>{
    while (x<1){
        alert('Please select app function and have fun')
        x++;
    }

})

