// Before running this sample, set AZURE_CACHE_IDENTIFIER and AZURE_CACHE_TOKEN environment variables
// using information from the Windows Azure management portal, e.g.
// set AZURE_CACHE_IDENTIFIER=tjanczuk.cache.windows.net
// set AZURE_CACHE_TOKEN=YWNzOmh0dHBzOi8vdGphbmN6dWs5MjU1LWNhY2hlLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQvL1dSQVB2MC45LyZvd25lciAzcHJsSTRueUJLajk1cnJoZkNOKnZNRVZaUktISjB5L1BwL3MvTnNpZXZRPSZodHRwOi8vdGphbmN6dWsuY2FjaGUud2luZG93cy5uZXQv

var cache = require('../lib/azurecache').create();

cache.put('test2', { first: 'Tomasz', last: 'Janczuk' }, 3, function (error) {
    if (error) throw error;
    cache.get('test2', function (error, data) {
        if (error) throw error;
        console.log('Data from cache:', data);
        console.log('Waiting 5 seconds to allow for TTL expiration...');
        setTimeout(function () {
		    cache.get('test2', function (error, data) {
		        if (error) throw error;
		        console.log('Data from cache:', data);
		    });
        }, 5000);
    });
});
