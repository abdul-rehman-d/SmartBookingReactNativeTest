import React, {useMemo, useRef} from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

const BS_HANDLE_SIZE = 24;
const BS_PADDING = 20;
const SCREEN_HEIGHT = Dimensions.get("window").height;

type Props = {
  numberOfLines: number;
};

function CustomBottomSheet({ numberOfLines }: Props) {
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  const lines = useMemo(() => {
    return (new Array(numberOfLines)).fill(null)
  }, [numberOfLines])
  
  const snapPoints = useMemo(() => {
    const maxShouldBe = BS_HANDLE_SIZE + (4 * BS_PADDING) + (numberOfLines * 20); // space for all lines
    const maxCanBe = SCREEN_HEIGHT; // 80% of the screen
  
    const expandedPoint = maxShouldBe > maxCanBe ? maxCanBe : maxShouldBe;

    return [
      BS_HANDLE_SIZE + BS_PADDING + (3 * 20),
      expandedPoint,
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
      <BottomSheetFlatList
        contentContainerStyle={styles.contentContainer}
        data={lines}
        renderItem={() => (
          <Text style={styles.text}>
            Lorem lpsum is simply text to the service in the world
          </Text>
        )}
        keyExtractor={(_, i) => `line-${i}`}
      />
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
    paddingVertical: 15,
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
});

export default CustomBottomSheet;
