import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import {useWarmUpBrowser} from '../hooks/WarmUpBrowser'

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);


  return (
    <View>
      <Image source={require('../assets/images/login_image.png')} 
        className="w-[350px] h-[400px] object-cover mx-auto"
      />
      <View className="p-8">
        <Text className="text-[30px] font-bold">Community Marketplace</Text>
        <Text className="text-[18px] text-slate-500 mt-6">Buy Sell Marketplace where you can sell old item and make real money </Text>
        <TouchableOpacity 
          onPress={onPress}
          className="p-4 bg-blue-500 border border-gray-200 rounded-full mt-20">
          <Text className='text-white text-center text-[18px]'>
            Get Started
          </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}