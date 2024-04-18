const admin = require("firebase-admin");

const errCodes = require("../errCodes");

exports.verifyUser = async (req, res, next) => {
	
	try {
		const { authtoken } = req.headers;
		// console.log(authtoken);
		if (!authtoken) {
			res.status(errCodes.BAD_REQUEST).json({ message: "token is null" });
			return;
		}
		const userData = await admin.auth().verifyIdToken(authtoken); 
		req.userData = userData;
		// console.log(userData);
		   
		next();
		// await new Promise(resolve => setTimeout(resolve, 0)); // Ensure execution continues after all asynchronous operations are completed
		console.log('hello'); 
	} catch (err) {
		console.log(err);
		res.status(errCodes.BAD_REQUEST).json({ message: "I am MiddleWare" });
	}
};