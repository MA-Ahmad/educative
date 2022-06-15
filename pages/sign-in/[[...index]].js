import { SignIn } from "@clerk/nextjs";
import { useColorMode, Center, Heading } from "@chakra-ui/react";

const SignInPage = () => {
  return (
    <div>
      <br />
      <br />
      <Center>
        <Heading>SIgn In2</Heading>
        <br />
        <br />
      </Center>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
};

export default SignInPage;
