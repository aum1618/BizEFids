import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import SIZES from '../../../shared/theme/sizes';
import {iconPaths, imagePaths} from '../../../shared/constants/paths';
import {BellDotIcon, ChevronLeft, X} from 'lucide-react-native';
import typography from '../../../shared/theme/typography';
import palette from '../../../shared/theme/palette';
import {FlatList} from 'react-native-gesture-handler';
import {screens} from '../../../shared/constants/screens';

export default function Presenter({color, text, navigation}) {
  const dummyNotifications = [
    {
      date: 'Today',
      notifications: [
        {
          title: 'Message',
          message: 'You have a new message',
          color: 'rgba(192, 59, 40, 0.2)',
        },
        {
          title: 'Meeting Reminder',
          message: 'Reminder: Meeting at 3 PM',
          color: 'rgba(50, 96, 210, 0.2)',
        },
        {
          title: 'Report Submission',
          message: "Don't forget to submit your report",
          color: 'rgba(51, 178, 158, 0.2)',
        },
      ],
    },
    {
      date: 'Yesterday',
      notifications: [
        {
          title: 'Missed Call',
          message: 'Missed call from John',
          color: 'rgba(100, 152, 44, 0.2)',
        },
        {
          title: 'New Email',
          message: 'New email from Jane',
          color: 'rgba(192, 59, 40, 0.2)',
        },
      ],
    },
    {
      date: '2 May 2024',
      notifications: [
        {
          title: 'Rent Reminder',
          message: 'Reminder: Pay rent',
          color: 'rgba(50, 96, 210, 0.2)',
        },
      ],
    },
    // Additional items
    {
      date: '1 May 2024',
      notifications: [
        {
          title: 'Doctor Appointment',
          message: 'Appointment with Dr. Smith at 10 AM',
          color: 'rgba(100, 152, 44, 0.2)',
        },
      ],
    },
    {
      date: '30 April 2024',
      notifications: [
        {
          title: 'Task Deadline',
          message:
            'Project deadline is today. Make sure to complete all tasks.',
          color: 'rgba(51, 178, 158, 0.2)',
        },
      ],
    },
  ];

  return (
    <Wrapper color={color}>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: SIZES.SCALE_10,
        }}
        style={{
          paddingHorizontal: SIZES.SCALE_10,
          flex: 1,
        }}>
        <View
        //  style={{paddingHorizontal: SIZES.SCALE_10}}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: SIZES.SCALE_20,
              gap: SIZES.SCALE_10,
            }}>
            <TouchableOpacity style={{}}>
              <ChevronLeft color={color.text} size={SIZES.SCALE_14} />
            </TouchableOpacity>
            <Text
              style={{
                color: color.text,
                fontFamily: typography.medium,
                fontSize: typography.FONT_SIZE_20,
              }}>
              Notifications
            </Text>
          </View>
          {dummyNotifications.map((notification, index) => {
            return (
              <View key={index}>
                <Text
                  style={{
                    color: color.placeholder,
                    fontFamily: typography.medium,
                    fontSize: typography.FONT_SIZE_16,
                    marginBottom: SIZES.SCALE_10,
                  }}>
                  {notification.date}
                </Text>
                {notification.notifications.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: SIZES.SCALE_10,
                        backgroundColor: item.color,
                        borderRadius: SIZES.SCALE_6,
                        marginBottom: SIZES.SCALE_10,
                        gap: SIZES.SCALE_10,
                        // width:"100%"
                      }}>
                      <View
                        style={{
                          height: SIZES.SCALE_30,
                          width: SIZES.SCALE_30,
                          borderRadius: 999,
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                          backgroundColor: color.white,
                        }}>
                        <BellDotIcon
                          color={palette.primary}
                          size={SIZES.SCALE_16}
                        />
                      </View>
                      <View style={{flex: 1}}>
                        <Text
                          style={{
                            color: color.text,
                            fontFamily: typography.medium,
                            fontSize: typography.FONT_SIZE_16,
                          }}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            color: color.text,
                            fontFamily: typography.regular,
                            fontSize: typography.FONT_SIZE_14,
                          }}>
                          {item.message}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </Wrapper>
  );
}
