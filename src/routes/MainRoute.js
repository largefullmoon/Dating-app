import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as screens from "../screens";

const Stack = createNativeStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
    }}>
      <Stack.Screen name="Splash" component={screens.Splash} />
      <Stack.Screen name="Welcome" component={screens.Welcome} />
      <Stack.Screen name="PhoneNumber" component={screens.PhoneNumber} />
      <Stack.Screen name="PhoneCode" component={screens.PhoneCode} />
      <Stack.Screen name="Gmail" component={screens.Gmail} />
      <Stack.Screen name="Birthday" component={screens.Birthday} />
      <Stack.Screen name="FirstName" component={screens.FirstName} />
      <Stack.Screen name="LastName" component={screens.LastName} />
      <Stack.Screen name="Sex" component={screens.Sex} />
      <Stack.Screen name="BirthdayPresent" component={screens.BirthdayPresent} />
      <Stack.Screen name="AgreementStep" component={screens.AgreementStep} /> 
      <Stack.Screen name="TycheChat" component={screens.TycheChat} /> 
      <Stack.Screen name="RegisterCompleted" component={screens.RegisterCompleted} /> 
      <Stack.Screen name="WelcomeSign" component={screens.WelcomeSign} />
      <Stack.Screen name="TermsOfUse" component={screens.TermsOfUse} />
      <Stack.Screen name="PhotoVideo" component={screens.PhotoVideo} />
      <Stack.Screen name="PlanList" component={screens.PlanList} />
      <Stack.Screen name="Chatting" component={screens.Chatting} />
      <Stack.Screen name="DirectMessage" component={screens.DirectMessage} />
      <Stack.Screen name="PlanStandard" component={screens.PlanStandard} />
      <Stack.Screen name="PlanRose" component={screens.PlanRose} />
      <Stack.Screen name="PlanLiLium" component={screens.PlanLiLium} />
      <Stack.Screen name="Setting" component={screens.Setting} />
      <Stack.Screen name="User" component={screens.User} />
      <Stack.Screen name="Tyche" component={screens.Tyche} />
      <Stack.Screen name="Suggest" component={screens.Suggest} />
      <Stack.Screen name="Register" component={screens.Register} />
    </Stack.Navigator>
  );
}

export default MainRoute;
