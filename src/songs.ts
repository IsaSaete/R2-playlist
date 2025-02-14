import { error } from "console";

export const isTitleEmpty = (songTitle: string): boolean => {
  let isEmpty = songTitle === "";

  return isEmpty;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  let doesExist = songTitles.includes(songTitle);

  return doesExist;
};

export const isTitleShort = (songTitle: string): boolean => {
  let isShort = songTitle.length < 3;

  return isShort;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  let isFull = songTitles.length >= 5;

  return isFull;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  let songsCount = songTitles.length;

  return songsCount;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  songTitles.splice(position, 1);
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  switch (errorCode) {
    case "required":
      errorMessage = "No has introducido ningún título";
      break;
    case "exists":
      errorMessage = "La cancion ya existe";
      break;
    case "too-short":
      errorMessage = "El título es demasiado corto";
      break;
    case "limit":
      errorMessage = "la plalist está llena";
      break;
    default:
      errorMessage = "La información no es válida";
  }

  return errorMessage;
};
