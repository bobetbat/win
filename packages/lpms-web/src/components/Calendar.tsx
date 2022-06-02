import { useState } from 'react';
import { Calendar as GCalendar, Box, Text, DropButton } from 'grommet';
import { Notification } from 'grommet-icons'


export const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState();
  const onSelect = (value: any) => {
    setSelectedDay(value);
  };

  return (
    <GCalendar onSelect={onSelect} date={selectedDay} range fill>
      {({ date, day, isSelected, isInRange }) => {
        return (
          <Box background={isInRange || isSelected ? 'light-3' : 'white'} border fill>
            <Box style={{ height: '6rem' }} pad="xxsmall" align="start" justify="between" fill>
              <Text size="large">{day}</Text>

              <Text weight='lighter' alignSelf='end'>$123</Text>
            </Box>
          </Box>
        )
      }}
    </GCalendar>
  );
};
