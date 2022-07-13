import { PageWrapper } from './PageWrapper';
import { Box, Text } from 'grommet';

export const Contacts = () => {
  return (
    <PageWrapper
      breadcrumbs={[
        {
          label: 'Home',
          path: '/'
        }
      ]}
    >
      <Box align='center' overflow='hidden'>
        <Text weight={500} size='2rem' margin='small'>
          Contacts
        </Text>
      </Box>
    </PageWrapper>
  );
};
