import {DescriptionTextProps} from './types';
import {Text, TouchableOpacity, View} from 'react-native';
import {useCallback, useRef, useState} from 'react';

const DescriptionText: React.FC<DescriptionTextProps> = ({
  containerStyle,
  numberOfLines,
  showMoreTextStyle,
  text,
  textStyle,
}) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const textRef = useRef<Text>(null);

  const handleTextLayout = useCallback(
    (e: any) => {
      const lines = e.nativeEvent.lines;
      if (lines.length > numberOfLines) {
        setIsTruncated(true); // Text exceeds the max number of lines, enable showMore
      }
    },
    [numberOfLines],
  );

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={containerStyle}>
      <Text
        numberOfLines={showMore ? undefined : numberOfLines}
        onTextLayout={handleTextLayout}
        ref={textRef}
        style={textStyle}>
        {text}
      </Text>

      {isTruncated && (
        <TouchableOpacity onPress={toggleShowMore}>
          <Text style={showMoreTextStyle}>{showMore ? 'Show Less' : 'Show More'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DescriptionText;
