document.addEventListener('DOMContentLoaded', function () {
    let currBrApexMap, currBrApextimer, nextBrApexMap, nextBrApexStart, nextBrApexEnd;
    let currRgApexMap, currRgApextimer, nextRgApexMap, nextRgApexStart, nextRgApexEnd;
    let currBrArenaMap, currBrArenatimer, nextBrArenaMap, nextBrArenaStart, nextBrArenaEnd;
    let currRgArenaMap, currRgArenatimer, nextRgArenaMap, nextRgArenaStart, nextRgArenaEnd;
    /* let type, currMap, currTimer, nextMap, nextStart, nextEnd, picture; */
    let seconds, minutes, hours, timer, timerContinueId;
    let [brApexCheck, rgApexCheck, brArenasCheck, rgArenasCheck, start] = [0, 0, 0, 0, 1]
    let brApex = document.querySelector(".brApex");
    let mapImage = document.querySelector("body");
    let rgApex = document.querySelector(".rgApex");
    let brArenas = document.querySelector(".brArenas");
    let rgArenas = document.querySelector(".rgArenas");
    let gameType = document.querySelector(".gameType");
    let currMapName = document.querySelector(".currMapName");
    let currMapTime = document.querySelector(".currMapTime");
    let nextMapImage = document.querySelector(".nextMapImage");
    let nextMapName = document.querySelector(".nextMapName");
    let nextMapTime = document.querySelector(".nextMapTime");
    let mainContent = document.querySelector(".mainContent");
    let selectedBorderTop = document.createElement("div");
    selectedBorderTop.className = "selectedBorderTop";
    let selectedBorderBottom = document.createElement("div");
    selectedBorderBottom.className = "selectedBorderBottom";

    let clickSound = new Audio();

    function playAudio(file) {
        clickSound.pause();
        clickSound = new Audio(file);
        clickSound.play();
    }

    getInformation();

    brApex.addEventListener("click", function () {
        if (brApexCheck == 0) {
            getInformation();
            [brApexCheck, rgApexCheck, brArenasCheck, rgArenasCheck] = [1, 0, 0, 0]
            playAudio("sound/click.mp3");
            showInformation(brApex, "Battle Royale", currBrApexMap, currBrApextimer,
                nextBrApexMap, nextBrApexStart,
                nextBrApexEnd);
            mapImage.style.backgroundImage = "url('img/" + currBrApexMap.replace("'", "") +
                ".jpg')";
        }
    });

    rgApex.addEventListener("click", function () {
        if (rgApexCheck == 0) {
            getInformation();
            [brApexCheck, rgApexCheck, brArenasCheck, rgArenasCheck] = [0, 1, 0, 0]
            playAudio("sound/click.mp3");
            showInformation(rgApex, "Battle Royale: Ranked", currRgApexMap, currRgApextimer,
                nextRgApexMap, nextRgApexStart,
                nextRgApexEnd);
            mapImage.style.backgroundImage = "url('img/" + currRgApexMap.replace("'", "") +
                ".jpg')";
        }
    });

    brArenas.addEventListener("click", function () {
        if (brArenasCheck == 0) {
            getInformation();
            [brApexCheck, rgApexCheck, brArenasCheck, rgArenasCheck] = [0, 0, 1, 0]
            playAudio("sound/click.mp3");
            showInformation(brArenas, "Arenas", currBrArenaMap, currBrArenatimer,
                nextBrArenaMap, nextBrArenaStart,
                nextBrArenaEnd);
            mapImage.style.backgroundImage = "url('img/" + currBrArenaMap + ".jpg')";
        }
    });

    rgArenas.addEventListener("click", function () {
        if (rgArenasCheck == 0) {
            getInformation();
            [brApexCheck, rgApexCheck, brArenasCheck, rgArenasCheck] = [0, 0, 0, 1]
            playAudio("sound/click.mp3");
            showInformation(rgArenas, "Arenas: Ranked", currRgArenaMap, currRgArenatimer,
                nextRgArenaMap, nextRgArenaStart,
                nextRgArenaEnd);
            mapImage.style.backgroundImage = "url('img/" + currRgArenaMap + ".jpg')";
        }
    });

    function getInformation() {
        setInterval(function () {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'getInformation.php', true);
            xhr.onload = function () {
                if (this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    /* console.log(data); */
                    /* Play Apex */
                    currBrApexMap = data.battle_royale.current.map;
                    currBrApextimer = data.battle_royale.current.remainingTimer;
                    nextBrApexMap = data.battle_royale.next.map;
                    nextBrApexStart = data.battle_royale.next.readableDate_start.slice(11, 16);
                    nextBrApexEnd = data.battle_royale.next.readableDate_end.slice(11, 16);
                    /* Ranked Leagues */
                    currRgApexMap = data.ranked.current.map;
                    currRgApextimer = data.ranked.current.remainingTimer;
                    nextRgApexMap = data.ranked.next.map;
                    nextRgApexStart = data.ranked.next.readableDate_start.slice(0, 10);
                    nextRgApexEnd = "";
                    /* Arenas */
                    currBrArenaMap = data.arenas.current.map;
                    currBrArenatimer = data.arenas.current.remainingTimer;
                    nextBrArenaMap = data.arenas.next.map;
                    nextBrArenaStart = data.arenas.next.readableDate_start.slice(11, 16);
                    nextBrArenaEnd = data.arenas.next.readableDate_end.slice(11, 16);
                    /* Ranked Arenas */
                    currRgArenaMap = data.arenasRanked.current.map;
                    currRgArenatimer = data.arenasRanked.current.remainingTimer;
                    nextRgArenaMap = data.arenasRanked.next.map;
                    nextRgArenaStart = data.arenasRanked.next.readableDate_start.slice(11,
                        16);
                    nextRgArenaEnd = data.arenasRanked.next.readableDate_end.slice(11, 16);

                    brApex.style.backgroundImage = "url('img/" + currBrApexMap.replace("'",
                        "") + ".jpg')";
                    rgApex.style.backgroundImage = "url('img/" + currRgApexMap.replace("'",
                        "") + ".jpg')";
                    rgArenas.style.backgroundImage = "url('img/" + currRgArenaMap +
                    ".jpg')";
                    brArenas.style.backgroundImage = "url('img/" + currBrArenaMap +
                    ".jpg')";

                    if (start == 1) {
                        start = 0;
                        mapImage.style.backgroundImage = "url('img/" + currBrApexMap.replace("'", "") + ".jpg')";
                        brApexCheck = 1;
                        showInformation(brApex, "Battle Royale", currBrApexMap,
                            currBrApextimer, nextBrApexMap, nextBrApexStart,
                            nextBrApexEnd);
                    }
                }
            }
            xhr.send();
            return arguments.callee;
        }(), 90000);

    }

    function showInformation(node, type, currMap, currTimer, nextMap, nextStart, nextEnd, timer) {
        //getInformation();
        if (currTimer.length >= 9) {
            seconds = currTimer.slice(7, 9);
            minutes = currTimer.slice(4, 6);
            hours = currTimer.slice(0, 3);
        } else {
            seconds = currTimer.slice(6, 8);
            minutes = currTimer.slice(3, 5);
            hours = currTimer.slice(0, 2);

        }

        clearInterval(timerContinueId);
        timerContinueId = setInterval(timerContinue(), 1000);
        node.append(selectedBorderTop);
        node.append(selectedBorderBottom);

        gameType.innerHTML = `${type}`;
        currMapName.innerHTML = `${currMap}`;
        nextMapName.innerHTML = `${nextMap}`;
        if (gameType.textContent == "Battle Royale: Ranked") {
                
            nextMapTime.innerHTML = `${nextStart}`;

            } else {
                nextMapTime.innerHTML = `${nextStart} - ${nextEnd}`;
            }
       
    }

    function timerContinue() {
        seconds--;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (seconds == "0-1") {
            seconds = 60;
            minutes--;
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (minutes == "0-1") {
                minutes = 60;
                hours--;
                if (hours < 10) {
                    hours = '0' + hours;
                }
            }
        }

        if ((minutes).length == 1) {
            minutes = '0' + minutes;
        }

        currMapTime.innerHTML = `${hours}:${minutes}:${seconds}`;
        if (hours == 0 && minutes == 0 && seconds == 1) {
            getInformation();
        }
        if (hours == 0 && minutes == 0 && seconds == 0) {
            getInformation();
            if (gameType.textContent == "Battle Royale") {
                showInformation(brApex, "Battle Royale", currBrApexMap, currBrApextimer, nextBrApexMap,
                    nextBrApexStart,
                    nextBrApexEnd);
                mapImage.style.backgroundImage = "url('img/" + currBrApexMap.replace("'", "") +
                ".jpg')";

            } else if (gameType.textContent == "Battle Royale: Ranked") {
                
                showInformation(rgApex, "Battle Royale: Ranked", currRgApexMap, currRgApextimer,
                    nextRgApexMap, nextRgApexStart,
                    nextRgApexEnd);
                mapImage.style.backgroundImage = "url('img/" + currRgApexMap.replace("'", "") +
                ".jpg')";

            } else if (gameType.textContent == "Arenas") {
                showInformation(brArenas, "Arenas", currBrArenaMap, currBrArenatimer, nextBrArenaMap,
                    nextBrArenaStart,
                    nextBrArenaEnd);
                mapImage.style.backgroundImage = "url('img/" + currBrArenaMap.replace("'", "") +
                    ".jpg')";

            } else if (gameType.textContent == "Arenas: Ranked") {
                
                showInformation(rgArenas, "Arenas: Ranked", currRgArenaMap, currRgArenatimer,
                    nextRgArenaMap, nextRgArenaStart,
                    nextRgArenaEnd);
                mapImage.style.backgroundImage = "url('img/" + currRgArenaMap.replace("'", "") +
                    ".jpg')";
            }
        }
        return arguments.callee;
    }

    splide = new Splide('.splide', {
        gap: '20px',
        padding: {
            left: '30px',
            right: '30px'
        },

        arrows: false,
        perPage: 4,
        type: 'slide',
        autoplay: false,
        interval: 2000,
        pagination: false,
        keyboard: false,
        slideFocus: false,
        breakpoints: {
            1200: {
                perPage: 3
            },
            900: {
                perPage: 2
            },
            600: {
                perPage: 1
            }
        }
    }).mount();

    let wideLeft = document.querySelector(".wide .left");
    let wideMiddle = document.querySelector(".wide .middle");
    let narrowMiddle = document.querySelector(".narrow .middle");
    let wideRight = document.querySelector(".wide .right");
    let transition = document.querySelector(".transition");
    let text = document.querySelector(".center .text");
    let mapRotation = document.querySelector(".mapRotation");
    let circleLoading = document.querySelector(".circleLoading");
    
    mapImage.setAttribute("style","overflow: visible;")
    setTimeout(function () {
        wideLeft.setAttribute("style",
            "animation-name: ToBottomAnimation; animation-duration: 5s;");
    }, 1000);

    setTimeout(function () {
        wideMiddle.setAttribute("style",
            "animation-name: ToBottomAnimation; animation-duration: 5s;");
    }, 1100);

    setTimeout(function () {
        wideRight.setAttribute("style",
            "animation-name: ToBottomAnimation; animation-duration: 5s;");
    }, 1200);

    setTimeout(function () {
        transition.setAttribute("style",
            "animation-name: fadeOutAnimation; animation-duration: 1s;");
    }, 4000);

    setTimeout(function () {
        text.setAttribute("style", "animation-name: fadeInAnimation; animation-duration: 2s;");
    }, 2000);

    let html = document.querySelector("html");
    setTimeout(function () {
        html.setAttribute("style"," position: static;!important;")
        transition.setAttribute("style", "display:none;");
    }, 4500);
    mapRotation.setAttribute("style", "opacity:1;");
    mapRotation.setAttribute("style",
        "animation-name: fadeInAnimation; animation-duration: 2s;");

    window.addEventListener('load', function() {
        circleLoading.style.display = "none";
        mapRotation.style.visibility="visible";
        transition.style.visibility="visible";
        
    });

    /* Background Music */
    let backgroundMusic = document.querySelector(".playMusic audio");
    let musicController = document.querySelector(".musicController");

    document.querySelector(".playMusic").addEventListener("click", () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicController.src = 'img/pause-solid.png';
        } else {
            backgroundMusic.pause();
            musicController.src = 'img/play-solid.png';
        }
    });

});
