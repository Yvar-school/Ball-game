<?php 
session_start();
?>
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="Wrapper">
        <div id="game">
            <div id="Top">
                <h1>Ballgame</h1>
                <div id="score">
                   <p id="nummer"> Score: 0 </p>
                </div>
            </div>
            <div id="gamearea">
                <div id="paddle"></div>
                <div id="ball"></div>
            </div>
            <div id="footer">
                &copy; 2020 Gemaakt door Yvar Nanlohij 235235.
            </div>
        </div>
    </div>
</body>
    <script>
        var name = '<?php echo $_SESSION['name'];?>';
    </script>
    <script src="game.js"></script>
    <script>
        init();
    </script>

</html>