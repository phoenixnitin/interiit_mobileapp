Perform these steps:

$ git clone https://github.com/phoenixnitin/interiit_mobileapp.git

$ cd interiit_mobileapp

$ sudo npm install -g ionic cordova

$ sudo npm install

Then, run it:

To run into the browser:

$ ionic serve

To add platform, and run on it

$ ionic cordova platform add android

$ ionic cordova run android

To build android app:

$ ionic cordova build android

You need to have android sdk.

Substitute android for ios if not on a Linux.

NOTE: Do not push auto-generated files. Only push those on which you worked on.
