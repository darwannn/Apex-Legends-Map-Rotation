<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Apex Legends Map Rotation</title>

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="splide/dist/css/splide.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

</head>

<body>
   
    <span class="circleLoading">
        <div class="circle">
            <div class="innerCircle">
                <div class="innerMostCircle">
                </div>
            </div>
        </div>
    </span>

    <span class="transition">
        <img class="backgroundImage"></img>
        <div class="banner wide">
            <div class="left"></div>
            <div class="middle"></div>
            <div class="right"></div>
        </div>
        <div class="banner narrow">
            <div class="middle"></div>
        </div>
        <div class="center">
            <img src="img/apexlogo.png" class="icon"></img>
            <div class="text">Apex Legends<br>Map Rotation</div>
        </div>
    </span>

    <span class="mapRotation">
      <div class="mainContent">
            <div class="gameType">Game Type</div>
            <div class="currMapName">Map Name</div>
            <div class="currMapTime" id="mapName">00:00:00</div>
            <div class="nextMapImage"><span class="nextMap">Next Map</span>
                <div class="nextMapName">Name</div>
                <div class="nextMapTime" id="mapName">Time</div>
            </div>
      </div>

      <audio class="apexAudio">
        <source src="sound/song.mp3" type="audio/ogg">
    </audio>


      <div class="subContent">
          <div id="splide" class="splide">
              <div class="splide__track">
                  <div class="splide__list">
                      <div class="splide__slide boxMapImage brApex">
                        <!-- <div class="selectedBorderTop"></div>
                        <div class="selectedBorderBottom"></div> -->
                          <div class="text">Play Apex</div>
                      </div>
                      <div class="splide__slide boxMapImage rgApex">
                          <div class="text">Ranked Leagues</div>
                      </div>
                      <div class="splide__slide boxMapImage brArenas">
                          <div class="text">Arenas</div>
                      </div>
                      <div class="splide__slide boxMapImage rgArenas">
                          <div class="text">Ranked Arenas</div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </span>

    <div type="button" class="playMusic">
        <audio src="sound/song.mp3"></audio>
        <img src="img/play-solid.png" class="musicController">
    </div>

    <script type="text/javascript" src="splide/dist/js/splide.min.js"></script>
    <script src="js/script.js"></script>
    
</body>

</html>