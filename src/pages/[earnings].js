import React from 'react';
import { useRouter } from 'next/router';
import { Box, Heading } from '@chakra-ui/react';

export async function getStaticPaths() {
  try {
    // Example API call to fetch earnings data
    const res = await fetch('https://api.example.com/earnings');
    const earningsData = await res.json();

    // Map the earnings data to paths
    const paths = earningsData.map((earning) => ({
      params: { earnings: earning.id.toString() },
    }));

    // Return the paths
    return { paths, fallback: false };
  } catch (error) {
    console.error('Error fetching static paths:', error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  try {
    // Fetch data for a specific earnings entry
    const res = await fetch(`https://api.example.com/earnings/${params.earnings}`);
    const earning = await res.json();

    // Return the earnings data as props
    return { props: { earning } };
  } catch (error) {
    console.error('Error fetching static props:', error);
    return { props: { earning: null } };
  }
}

const EarningsPage = ({ earning }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!earning) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h1" size="xl" mb={6}>
          Earning data not found
        </Heading>
      </Box>
    );
  }

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={6}>
        Earnings: {earning.title}
      </Heading>
      <p>{earning.description}</p>
    </Box>
  );
};

export default EarningsPage;
