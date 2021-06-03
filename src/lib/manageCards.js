import albumArt from "album-art";

export function fetchAlbums(albums) {
  return Promise.all(
    albums.map((album) => albumArt(album.artist, { album: album.name })),
  );
}

export function shuffleCards(cards) {
  const cardsCopy = [...cards];
  for (let i = 0; i < cardsCopy.length; i++) {
    const randIdx = Math.floor(Math.random() * cardsCopy.length);
    [cardsCopy[i], cardsCopy[randIdx]] = [cardsCopy[randIdx], cardsCopy[i]];
  }
  return cardsCopy;
}
