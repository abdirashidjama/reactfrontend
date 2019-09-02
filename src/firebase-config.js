import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
		apiKey: ,
		authDomain: ,
		databaseURL: ,
		projectId:,
		storageBucket:,
		messagingSenderId:		
};

firebase.initializeApp(config);

var storage = firebase.storage();

export {
	storage, firebase as default
};