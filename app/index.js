import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import LoginScreen from "./LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

export default function Page() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <View className="flex-1 items-center justify-center ">
        <StatusBar style="auto" />

        <SignedIn>
          <Text> You are signed in</Text>
        </SignedIn>

        <SignedOut>
          <LoginScreen />
        </SignedOut>

      </View>
    </ClerkProvider>
  );
}
