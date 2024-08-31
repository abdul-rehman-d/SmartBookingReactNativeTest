import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const BS_HANDLE_SIZE = 24;
const BS_PADDING = 20

type Props = {
  numberOfLines: number;
};

function CustomBottomSheet({ numberOfLines }: Props) {
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => {
    return [
      BS_HANDLE_SIZE + BS_PADDING + (3 * 20),
      BS_HANDLE_SIZE + (2 * BS_PADDING) + (numberOfLines * 20),
    ];
  }, [numberOfLines]);

  return (
    <BottomSheet
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={styles.bottomsheet}
      handleIndicatorStyle={styles.indicator}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View>
          <Text
            style={styles.text}
          >{generateDummyText(numberOfLines)}
          </Text>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  bottomsheet: {
    backgroundColor: "#00C7BE",
  },
  indicator: {
    backgroundColor: "#fff",
    width: 100,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: "#00C7BE",
  },
  text: {
    fontSize: 16,
  },
});

function generateDummyText(numberOfLines: number): string {
  return new Array(numberOfLines)
    .fill("Lorem lpsum is simply text to the service in the world")
    .join('\n');
}

export default CustomBottomSheet;
