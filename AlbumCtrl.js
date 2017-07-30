(function() {
  var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [{
      title: 'Blue',
      duration: 161.71,
      audioUrl: 'assets/music/bloc_jams_music/blue'
    }, {
      title: 'Green',
      duration: 103.96,
      audioUrl: 'assets/music/bloc_jams_music/green'
    }, {
      title: 'Red',
      duration: 268.45,
      audioUrl: 'assets/music/bloc_jams_music/red'
    }, {
      title: 'Pink',
      duration: 153.14,
      audioUrl: 'assets/music/bloc_jams_music/pink'
    }, {
      title: 'Magenta',
      duration: 374.22,
      audioUrl: 'assets/music/bloc_jams_music/magenta'
    }]
  };

  function fixtureService() {
    this.getAlbumData = function(){
      return albumPicasso;
    };
  }

  angular
    .module('myApp')
    .service('fixtureService', fixtureService);

})();
