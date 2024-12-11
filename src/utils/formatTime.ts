/**
 * Formats a given time in seconds to a string in 'mm:ss' format.
 *
 * @param seconds - The time in seconds to be formatted.
 * @returns A string representing the time in 'mm:ss' format.
 */
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60).toString(); // Get the minutes part
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0'); // Get the seconds part and ensure two digits
  return `${mins}:${secs}`; // Return in 'mm:ss' format
};
