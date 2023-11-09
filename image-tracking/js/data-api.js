import {Component, Type} from "@wonderlandengine/api";
import CryptoJS from "crypto-js";

export class DataApi extends Component {
	static TypeName = "data-api";
	static Properties = {
		url: {type: Type.String, default: ""},
	};

	init() {
		// fetch ID and Key from URL
		if (window.location.search != "") {
			try {
				this.ID = window.location.search
					.split("?")[1]
					.split("&")[0]
					.split("=")[1];
				this.key = window.location.search
					.split("?")[1]
					.split("&")[1]
					.split("=")[1];
			} catch (err) {
				console.error(
					"Could not detect id and key, check whether the syntax is correct eg : ?id=test&key=1234",
				);
				alert(
					"Could not detect id and key, check whether the URL syntax is correct eg : ?id=test&key=1234",
				);
			}
		}
		this.data_main;

		fetch("url.txt")
			.then((response) => response.text())
			.then((text) => this.load_src(text));
	}

	start() {
		this.dataread = 0;
	}

	data_load(text, data_main, ID, key) {
		console.log("Started loading data");

		try {
			data_main = JSON.parse(
				CryptoJS.AES.decrypt(text, "Imblend").toString(
					CryptoJS.enc.Utf8,
				),
			);
			console.log("first layer decrypted successfully");
		} catch (error) {
			alert(
				"Couldnt decrypt layer1! check whether the URL syntax is correct eg : ?id=test&key=1234",
			);
		}
		this.data = data_main[ID];
		try {
			var Decypted = JSON.parse(
				CryptoJS.AES.decrypt(this.data, key).toString(
					CryptoJS.enc.Utf8,
				),
			);
			console.log("second layer decrypted successfully");
		} catch (error) {
			alert(
				"Couldnt decrypt layer2! check whether the URL syntax is correct eg : ?id=test&key=1234",
			);
		}
		this.data = Decypted;
		console.log(this.data);
	}

	load_src(text) {
		console.log("Started loading src");
		this.url = text;
		fetch(this.url)
			.then((response) => response.text())
			.then((text) =>
				this.data_load(text, this.data_main, this.ID, this.key),
			);
	}
}
