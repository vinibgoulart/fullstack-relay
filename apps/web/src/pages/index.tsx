import { Stack, Text } from '@chakra-ui/react';
import { DIRECTION } from '@fullstack-relay/enums';
import { ActionButton } from '@fullstack-relay/ui';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import type { PreloadedQuery } from 'react-relay';
import { graphql, usePreloadedQuery } from 'react-relay';

import type { pagesQuery } from '../../__generated__/pagesQuery.graphql';
import pagesPreloadedQuery from '../../__generated__/pagesQuery.graphql';
import { PageHeader } from '../components/PageHeader';
import { RootLayout } from '../layouts/RootLayout';
import { getPreloadedQuery } from '../relay/network';

type HomeProps = {
  preloadedQueries: {
    home: PreloadedQuery<pagesQuery>;
  };
};

const Home = (props: HomeProps) => {
  const router = useRouter();

  // const query = usePreloadedQuery<pagesQuery>(
  //   graphql`
  //     query pagesQuery(
  //       $workoutFilters: WorkoutFilter
  //       $workoutSplitFilters: WorkoutSplitFilter
  //     ) @preloadable {
  //       ...WorkoutGridList_query @arguments(first: 6, filters: $workoutFilters)
  //       ...WorkoutSplitGridList_query
  //         @arguments(first: 6, filters: $workoutSplitFilters)
  //     }
  //   `,
  //   props.preloadedQueries.home,
  // );

  const actions = (
    <>
      <ActionButton link="/workout/create">Adicionar treino</ActionButton>
    </>
  );

  const breadcrumbs = [
    {
      label: 'Home',
      onClick: () => {
        router.push('/');
      },
    },
  ];

  return (
    <RootLayout>
      <PageHeader
        title="Bem vindo!"
        actions={actions}
        breadcrumbs={breadcrumbs}
      />
      <Stack spacing={8}>
        <Text>O que iremos treinar hoje?</Text>
      </Stack>
    </RootLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      preloadedQueries: {
        // home: await getPreloadedQuery(
        //   pagesPreloadedQuery,
        //   {
        //     workoutFilters: {
        //       fromLoggedUser: true,
        //       isPublic: null,
        //     },
        //     workoutSplitFilters: {
        //       fromLoggedUser: true,
        //       orderBy: [
        //         {
        //           direction: DIRECTION.DESC,
        //         },

        //         {
        //           direction: DIRECTION.DESC,
        //         },
        //       ],
        //     },
        //   },
        //   context,
        // ),
      },
    },
  };
};

export default Home;
