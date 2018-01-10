var homeTeam;
var fixtureDate;
var awayTeam;
var matchday;
var homeTeamGoals;
var awayTeamGoals;
var odds;


function displayFixtures() {

    // Creates AJAX call for each fixture
    $.ajax({
        headers: { 'X-Auth-Token': '532b79593e0642408603e3d7e89b525a' },
        url: 'http://api.football-data.org//v1/competitions/467/fixtures',
        dataType: 'json',
        type: 'GET',
    }).done(function(response) {
        console.log(response);
        for (var i = 0; i < response.fixtures.length; i++) {
            homeTeam = response.fixtures[i].homeTeamName;
            awayTeam = response.fixtures[i].awayTeamName;
            fixtureDate = response.fixtures[i].date.substr(0,10) + '   ';
            matchday = response.fixtures[i].matchday;
            homeTeamGoals = response.fixtures[i].result.goalsHomeTeam;
            awayTeamGoals = response.fixtures[i].result.goalsAwayTeam;
            odds = response.fixtures[i].odds;
            var fixturehtml = '';
            fixturehtml += '<li>'
            fixturehtml += '<div class="collapsible-header"><span>'+ fixtureDate +'   </span><i class="fa fa-futbol-o fixture" aria-hidden="true"></i><span class="title">' + homeTeam + ' - ' + awayTeam + '</span></div></div>'
            fixturehtml += '<div class="collapsible-body"><p> Result: '+ homeTeamGoals +' - '+ awayTeamGoals +'<br>Matchday: '+ matchday +'<br>Odds: '+ odds +'</p></div>'
            $('#fixtures').append(fixturehtml);

            // </li>
        }

    });

}

function countdown() {
    var now = new Date();
    var eventDate = new Date(2018, 5, 14, -2,  );

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime/ 1000);
    var m = Math.floor(s/ 60);
    var h = Math.floor(m/ 60);
    var d = Math.floor(h/ 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

    setTimeout(countdown, 1000)

}

countdown();
displayFixtures();