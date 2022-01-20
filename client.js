$(document).ready(function() {
    var links = [
		{
            name: 'celeste',
            link: 'https://steamcommunity.com/id/celestialv1/'
        },
		{
            name: 'akira',
            link: 'https://steamcommunity.com/id/v4y'
        },
    {
            name: 'lai mai',
            link: 'https://steamcommunity.com/id/D4IGGI3RRIE/'
    },
    	{
            name: 'cbd',
            link: 'https://steamcommunity.com/id/ballsenjoyerpl/'
        },

        {
            name: 'zee',
            link: 'https://steamcommunity.com/id/nucleoplasmic/'
    },
    ];

    for(var i in links) {
        var link = links[i];

        $('#marquee').append('<a href="' + link.link + '" target="_blank">' + link.name + '</a>');

        var link = $('#marquee').children('a').last();

        if(i != links.length - 1) {
            $('#marquee').append(' · ');
        }
    }

    $('#marquee').marquee({
        duration: 20000,
        gap: 400,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });
});
