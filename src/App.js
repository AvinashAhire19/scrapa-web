import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./components/Navigation";
import "./App.css";
import  FormSection  from "./components/FormSection";
import Footer from "./components/Footer";
import Service from "./components/Service";




const App = () => {
	return (
		<div>
			<Navigation />
      		<FormSection/>
      		<Service/>
      		<Footer/>
		</div>
	);
};

export default App;
