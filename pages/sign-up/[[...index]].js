import { SignUp } from "@clerk/nextjs";
import { Center, Heading } from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <div>
      <br />
      <br />
      <Center>
        <Heading>SIgn Up</Heading>
        <br />
        <br />
      </Center>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;
