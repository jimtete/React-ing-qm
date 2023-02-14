import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="http://lovefromtuscany.com/wp-content/uploads/2017/11/cathedral-3413230_1280-1024x682.jpg"
      title="First meetup"
      address="Some street"
      description="Some description for first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "http://lovefromtuscany.com/wp-content/uploads/2017/11/cathedral-3413230_1280-1024x682.jpg",
        id: meetupId,
        title: "First meetup",
        address: "Some street",
        description: "Some description for first meetup",
      },
    },
  };
}

export default MeetupDetails;
