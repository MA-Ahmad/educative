import Main from "../components/Body/Main";

export default function Home() {
  return (
    <>
      <br />
      <Main />
    </>
  );
}

// _______________________________________________________________________________________
//                        Static Props
// _______________________________________________________________________________________

// export async function getStaticProps() {
//   const res = await fetch("https://.../posts");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
