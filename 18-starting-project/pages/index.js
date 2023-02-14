import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image: "https://selectitaly.com/blog/wp-content/uploads/2016/11/6035.jpg",
    address: "Some address5, 12345 some city",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "http://lovefromtuscany.com/wp-content/uploads/2017/11/cathedral-3413230_1280-1024x682.jpg",
    address: "Some address5, 12345 some other city",
    description: "This is the second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context){
  const req = context.req;
  const res = context.res;

  // fetdh data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  } ;
}

// export async function getStaticProps() {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1
//   };
// }

export default HomePage;
