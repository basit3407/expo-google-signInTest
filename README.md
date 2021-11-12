# expo-google-signInTest

Purpose of this project is to test the native google using https://www.npmjs.com/package/expo-google-sign-in.

EXPECTED BEHAVIOUR:
1. on clicking the button modal will show which will have the google email addresses.
2. on tapping the email address we will get the idToken of the user which was tapped. This token will be console logged.

ACTUAL BEHAVIOUR IN CLASSIC-EXPO BUILD.
1. modal is shown as expected
2. token is console logged as expected

ACTUAL BEHAVIOUR IN EAS-BUILD
1.modal is shown as expected
2. however there is no token. null is console logged.

Note:
you will ocourse need to generate and use your own google.json file. i have not uploaded mine.

reference docs that were used to create this project.
https://www.npmjs.com/package/expo-google-sign-in
