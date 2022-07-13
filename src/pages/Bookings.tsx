import { useAppState } from '../store';
import { PageWrapper } from './PageWrapper';
import { Box, Header, Spinner } from 'grommet';
import { useMemo } from 'react';
import { MessageBox } from "src/components/MessageBox";

const tokens = []

export const Bookings = ({ }) => {
  const { isConnecting } = useAppState();

  const isLoading = useMemo(
    () => false,
    []
  );
  const isError = useMemo(
    () => false,
    []
  );
  return (
    <PageWrapper>
      {!isConnecting &&
        <Box>
          <Header>Bookings</Header>
          <MessageBox type='info' show={isLoading}>
            <Box direction='row'>
              <Box margin={{ right: 'small ' }}>
                Tokens data is loading. Please wait..&nbsp;
              </Box>
              <Spinner color='black' />
            </Box>
          </MessageBox>

          <MessageBox type='info' show={!isLoading && (!tokens || tokens.length === 0)}>
            <Box>
              Tokens list is empty. It is a time to book a stay!
            </Box>
          </MessageBox>

          <MessageBox type='error' show={!!isError}>
            <Box>
              {isError}
            </Box>
          </MessageBox>

          <Box direction='column'>
            {/* token cards list */}
          </Box>
        </Box>
      }
    </PageWrapper>
  );
};
