import React from "react";
import { useRouter } from "next/router";
import { Box, Heading } from "@chakra-ui/react";

// Fetch the list of paths we want to pre-render
export async function getStaticPaths() {
  // Example data fetching from an API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { earnings: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// Fetch the data for a specific post
export async function getStaticProps({ params }) {
  // params contains the post `earnings`.
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.earnings}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

const Post = ({ post }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed initially until
  // the page is generated.
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={6}>
        {post.title}
      </Heading>
      <p>{post.body}</p>
    </Box>
  );
};

export default Post;
