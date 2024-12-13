import {Container, ToggleShowMore} from './styles';
import {DescriptionTextProps} from './types';
import {PrimaryText} from '@components/atoms';
import {Text} from 'react-native';
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
    <Container style={containerStyle}>
      <PrimaryText
        numberOfLines={showMore ? undefined : numberOfLines}
        onTextLayout={handleTextLayout}
        ref={textRef}
        style={textStyle}>
        {text}
      </PrimaryText>

      {isTruncated && (
        <ToggleShowMore onPress={toggleShowMore}>
          <Text style={showMoreTextStyle}>{showMore ? 'Show Less' : 'Show More'}</Text>
        </ToggleShowMore>
      )}
    </Container>
  );
};

export default DescriptionText;
