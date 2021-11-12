# expo-google-signInTest

Purpose of this project is to test the native google signin usin expo-google-sign-in i.e https://docs.expo.dev/versions/latest/sdk/google-sign-in/

EXPECTED BEHAVIOUR:
1. on clicking the button modal will show which will have the google email addresses.
2. on tapping the email address we will get the idToken of the user which was tapped. This token will be displayed below button

ACTUAL BEHAVIOUR IN CLASSIC-EXPO BUILD.
1. modal is shown as expected
2. token is shown as expected.

ACTUAL BEHAVIOUR IN EAS-BUILD.
1. modal is shown as expected
2. however there is no token. null is shown for token

Note:
you will ofcourse need to generate and use your own google.json file. i have not uploaded mine.
This can only be tested in stand alone apps.


