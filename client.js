$(document).ready(function() {
    var links = [
		{
            name: 'shr1mp',
            link: 'https://steamcommunity.com/id/shr1mpIe'
        },
		{
            name: 'akira',
            link: 'https://steamcommunity.com/id/deafthnote'
        },
    {
            name: 'lai mai',
            link: 'https://steamcommunity.com/id/D4IGGI3RRIE/'
    },
    	{
            name: 'wogat',
            link: 'https://steamcommunity.com/id/wogat/'
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
