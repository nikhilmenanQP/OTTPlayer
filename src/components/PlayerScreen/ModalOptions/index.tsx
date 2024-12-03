import React, {useCallback, useMemo} from 'react';

import {Check} from '@assets/images/appIcons';
import {ICON_SIZE, OptionContainer, OptionItem, OptionText} from './styles';
import {OptionContainerProps} from './types';
import {useAppTheme} from '@hooks/useAppTheme';

/**
 * Audio and subtitle options available in the modal
 */
const audioOptions: string[] = ['English', 'Español', 'French', 'German', 'Italian', 'Polish', 'Japanese'];
const subtitleOptions: string[] = ['English', 'Español', 'Off'];

const ModalOptions: React.FC<OptionContainerProps> = React.memo(
  ({selectedAudio, selectedSubtitle, activeTab, setSelectedAudio, setSelectedSubtitle, isFullscreen}) => {
    const {
      theme: {colors, spacing},
    } = useAppTheme();
    const justifyContent = useMemo(() => (isFullscreen ? 'flex-start' : 'space-between'), [isFullscreen]);

    const {handleSelection, options, selectedOption} = useMemo(() => {
      if (activeTab === 'audio') {
        return {
          handleSelection: setSelectedAudio,
          options: audioOptions,
          selectedOption: selectedAudio,
        };
      }
      return {
        handleSelection: setSelectedSubtitle,
        options: subtitleOptions,
        selectedOption: selectedSubtitle,
      };
    }, [activeTab, selectedAudio, selectedSubtitle, setSelectedAudio, setSelectedSubtitle]);

    const handleSelectOption = useCallback(
      (option: string) => {
        handleSelection(option);
      },
      [handleSelection],
    );

    const memoizedStyles = useMemo(
      () => (option: string) => ({
        backgroundColor: selectedOption === option ? colors.bootstrapBlue : undefined,
        marginLeft: selectedOption === option ? spacing.sm_x : undefined,
      }),
      [selectedOption, colors.bootstrapBlue, spacing.sm_x],
    );

    /**
     * Render the OptionItems
     * @param option
     * @returns
     */
    const renderOptionItem = (option: string) => {
      const {backgroundColor, marginLeft} = memoizedStyles(option);
      return (
        <OptionItem key={option} onPress={() => handleSelectOption(option)} backgroundColor={backgroundColor}>
          {selectedOption === option && <Check width={ICON_SIZE} height={ICON_SIZE} />}
          <OptionText marginLeft={marginLeft}>{option}</OptionText>
        </OptionItem>
      );
    };

    return <OptionContainer justifyContent={justifyContent}>{options.map(renderOptionItem)}</OptionContainer>;
  },
);

export {ModalOptions};
