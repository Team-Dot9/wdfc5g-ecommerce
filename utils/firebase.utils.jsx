// firebase.js
// contains the Firebase context and provider

import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import firebaseConfig from "./firebaseConfig";

// we create a React Context, for this to be accessible
// from a component later
export const FirebaseContext = createContext(null);

const Firebase = ({ children }) => {
	const dispatch = useDispatch();

	// check if firebase app has been initialized previously
	// if not, initialize with the config we saved earlier
	if (!app.apps.length) {
		app.initializeApp(firebaseConfig);
		firebase = {
			app: app,
			database: app.database(),

			api: {
				getTodos,
			},
		};
	}

	// function to query Todos from the database and
	// fire a Redux action to update the items in real-time
	function getTodos() {
		firebase.database.ref("todos").on("value", (snapshot) => {
			const vals = snapshot.val();
			let _records = [];
			for (var key in vals) {
				_records.push({
					...vals[key],
					id: key,
				});
			}
			// setTodos is a Redux action that would update the todo store
			// to the _records payload
			dispatch(setTodos(_records));
		});
	}

	return (
		<FirebaseContext.Provider value={firebase}>
			{children}
		</FirebaseContext.Provider>
	);
};

export default Firebase;
