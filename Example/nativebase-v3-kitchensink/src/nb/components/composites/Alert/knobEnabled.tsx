import React from 'react';
import { Alert, Box, CloseIcon, IconButton, Text } from 'native-base';
import { select } from '@storybook/addon-knobs';

export const Example = () => {
  return (
    <Box mx={3} w="90%">
      <Alert
        status={select(
          'status',
          ['success', 'green', 'error', 'red', 'warning'],
          'error'
        )}
        colorScheme={'error'}
        variant={select(
          'variant',
          ['left-accent', 'solid', 'subtle', 'top-accent'],
          'subtle'
        )}
        action={<IconButton icon={<CloseIcon size={3} />} />}
        actionProps={{ alignSelf: 'center' }}
      >
        <Alert.Icon />
        <Text>Error Alert</Text>
        <Text>Description </Text>
      </Alert>
    </Box>
  );
};
