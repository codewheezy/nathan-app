import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TabComponent = ({
  tintColor,
  IconType,
  iconName,
  size,
  notificationCount,
  hasNotification,
  style
}) => {
  return (
    <View style={style}>
      <IconType name={iconName} size={size} color={tintColor} />
      {/* {hasNotification ? (
        <View style={styles.notificationBubble}>
          <Text style={styles.notificationCount}>{notificationCount}</Text>
        </View>
      ) : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  notificationBubble: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    backgroundColor: 'red',
    position: 'absolute',
    top: -5,
    left: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationCount: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold'
  }
});

export default TabComponent;