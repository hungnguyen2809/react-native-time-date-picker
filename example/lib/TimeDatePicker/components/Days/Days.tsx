import React, { useState, useMemo } from "react";
import { View, Text } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { styles } from "./Days.style";
import { defaultOptions, useCalendar } from "../../TimeDatePicker";

const Days = () => {
  const {
    state,
    utils,
    options = defaultOptions,
    onDateChange,
  } = useCalendar();
  const [mainState, setMainState] = state;
  const [itemSize, setItemSize] = useState(0);
  const style = styles(options);
  // @ts-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const days = useMemo(() => utils.getMonthDays(mainState.activeDate));

  const onSelectDay = (date: string | undefined) => {
    setMainState({
      type: "set",
      selectedDate: date,
    });
    onDateChange?.(utils.getFormatted(utils.getDate(date), "dateFormat"));
  };

  // @ts-ignore
  const changeItemHeight = ({ nativeEvent }) => {
    const { width } = nativeEvent.layout;
    !itemSize && setItemSize(width / 7 - 0.5);
  };

  return (
    <View
      style={[style.container, { flexDirection: "row" }]}
      onLayout={changeItemHeight}
    >
      {days.map((day, n) => (
        <View
          key={n}
          style={{
            width: itemSize,
            height: itemSize,
          }}
        >
          {day && (
            <RNBounceable
              style={[
                style.dayItem,
                {
                  borderRadius: itemSize / 2,
                },
                options.daysStyle,
                mainState.selectedDate === day.date && style.dayItemSelected,
              ]}
              onPress={() => !day.disabled && onSelectDay(day.date)}
            >
              <Text
                style={[
                  style.dayText,
                  mainState.selectedDate === day.date && style.dayTextSelected,
                  day.disabled && style.dayTextDisabled,
                ]}
              >
                {day.dayString}
              </Text>
            </RNBounceable>
          )}
        </View>
      ))}
    </View>
  );
};

export { Days };
