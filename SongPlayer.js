(function() {
    function SongPlayer() {
         var SongPlayer = {};
         var currentSong = null;
         }
         /**
 * @desc Buzz object audio file
 * @type {Object}
 */
   var currentBuzzObject = null;
   /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */
    SongPlayer.play = function(song) {
         if (SongPlayer.currentSong !== song) {
             setSong(song);
             playSong(song);
         } else if (SongPlayer.currentSong === song) {
             if (currentBuzzObject.isPaused()) {
                 playSong(song);
             }
        }
     };

})
currentBuzzObject.play();


   var setSong = function(song) {
       if (currentBuzzObject) {
           currentBuzzObject.stop();
           currentSong.playing = null;
       }

       currentBuzzObject = new buzz.sound(song.audioUrl, {
           formats: ['mp3'],
           preload: true
       });

       currentSong = song;
    };
         SongPlayer.play = function(song) {
         if (currentSong !== song) {
          setSong(song);
          currentBuzzObject.play();
     }
 };
         return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
