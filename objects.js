var playlist = {playlist};


function updatePlaylist(playlist, artistName, songTitle) {
playlist[artistName] = songTitle
return Playlist
}

function removeFromPlaylist (playlist,artistName) {
  delete playlist[artistName]  
  return playlist
}


