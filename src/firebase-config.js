import firebase from 'firebase/app';
import 'firebase/storage';

var config = {

		apiKey: "AIzaSyDXoUwAL_dBs8rmqnoYCIPXGlYj1MNmSWA",
	    authDomain: "pic-storage-5c1d7.firebaseapp.com",
	    databaseURL: "https://pic-storage-5c1d7.firebaseio.com",
	    projectId: "pic-storage-5c1d7",
	    storageBucket: "pic-storage-5c1d7.appspot.com",
	    messagingSenderId: "512330873698",
	    appId: "1:512330873698:web:6896eb3ce0c981c3"
};

firebase.initializeApp(config);

var storage = firebase.storage();

export {
	storage, firebase as default
};