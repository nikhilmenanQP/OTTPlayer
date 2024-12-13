import PrimaryText from '../PrimaryText';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Subtitle, SubtitleOverlayProps} from './types';
import {TextStyle} from 'react-native';
import {subTitleStyle} from './styles';
import {useAppTheme} from '@hooks/useAppTheme';

const SubtitleOverlay: React.FC<SubtitleOverlayProps> = ({
  currentTime,
  isFullScreen,
  subtitleTextStyle,
  subtitleUri = 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt', // Default subtitle URI
}) => {
  /**
   * Get the current theme (dark/light) from the app's theme context.
   */
  const {theme} = useAppTheme();

  const [subtitles, setSubtitles] = useState<Subtitle[]>([]); // State to store the list of parsed subtitles.
  const [currentSubtitle, setCurrentSubtitle] = useState<string>(''); // State to store the subtitle text currently being displayed.

  /**
   * Fetch the VTT subtitle file from the provided URI and parse it into Subtitle objects.
   */
  useEffect(() => {
    const fetchSubtitles = async () => {
      try {
        const response = await axios.get(subtitleUri); // Fetch the VTT file.
        const parsedSubtitles = parseVTT(response.data); // Parse the fetched VTT data into subtitles.
        setSubtitles(parsedSubtitles); // Store the parsed subtitles in the state.
      } catch (error) {
        console.error('Failed to fetch subtitles:', error); // Log any errors that occur during the fetch.
      }
    };

    fetchSubtitles(); // Trigger the fetch when the component mounts or when subtitleUri changes.
  }, [subtitleUri]);

  /**
   *  Update the displayed subtitle based on the current video time.
   */
  useEffect(() => {
    const updateSubtitle = () => {
      /**
       * Find the subtitle that corresponds to the current time within its start and end times.
       */
      const subtitle = subtitles.find(
        sub => currentTime >= toSeconds(sub.startTime) && currentTime <= toSeconds(sub.endTime),
      );
      /**
       * Update the state with the found subtitle's text or clear it if none is found.
       */
      setCurrentSubtitle(subtitle ? subtitle.text : '');
    };

    /**
     * Debounce the subtitle update to avoid rapid re-renders when video time updates quickly.
     */
    const debounceUpdate = setTimeout(updateSubtitle, 100);
    return () => clearTimeout(debounceUpdate); // Cleanup the timeout to prevent memory leaks.
  }, [currentTime, subtitles]); // This effect runs when either currentTime or subtitles changes.

  /**
   * Return the current subtitle text, if available, or render nothing.
   */
  return currentSubtitle ? (
    // <Text style={[styles.subTitle as StyleProp<TextStyle>, subtitleTextStyle]}>{currentSubtitle}</Text>
    <PrimaryText style={[subTitleStyle(theme, isFullScreen), subtitleTextStyle as TextStyle]}>
      {currentSubtitle}
    </PrimaryText>
  ) : null;
};

/**
 * Utility function to parse a VTT (Web Video Text Tracks) file.
 * This function extracts the start time, end time, and subtitle text from the VTT file.
 * @param data
 * @returns
 */
const parseVTT = (data: string): Subtitle[] => {
  /**
   * Regular expression to match the time ranges and subtitle text in the VTT file.
   */
  const regex = /(\d{2}:\d{2}:\d{2}\.\d{3})\s-->\s(\d{2}:\d{2}:\d{2}\.\d{3})\s(.+)/g;
  let matches: RegExpExecArray | null;
  const result: Subtitle[] = [];

  /**
   * Loop through all matches in the VTT file and create subtitle objects.
   */
  while ((matches = regex.exec(data)) !== null) {
    result.push({
      endTime: matches[2], // End time of the subtitle
      startTime: matches[1], // Start time of the subtitle
      text: matches[3].trim(), // Subtitle text, trimmed of extra spaces
    });
  }

  return result; // Return the array of subtitle objects.
};

/**
 * Utility function to convert a time string (hh:mm:ss.mmm) to seconds.
 * This is used to compare the current video time with subtitle start and end times.
 * @param timeString
 * @returns
 */
const toSeconds = (timeString: string): number => {
  const [hours, minutes, seconds] = timeString.split(':');
  return +hours * 3600 + +minutes * 60 + parseFloat(seconds); // Convert hours, minutes, and seconds into a total number of seconds.
};

export default SubtitleOverlay;
