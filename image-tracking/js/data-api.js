WL.registerComponent(
	"data-api",
	{
		url: {
			type: WL.Type.String,
			default: "",
		},
	},
	{
		init: function () {
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
					console.log(
						"your User ID = " + this.ID + "\n" + "Your User Key = " + this.key
					);
				} catch (err) {
					console.error(
						"Could not detect id and key, check whether the syntax is correct eg : ?id=test&key=1234"
					);
					alert(
						"Could not detect id and key, check whether the URL syntax is correct eg : ?id=test&key=1234"
					);
				}
			}
			this.data_main;

			fetch("url.txt")
				.then((response) => response.text())
				.then((text) => this.load_src(text));
		},
		start: function () {
			this.dataread = 0;
		},
		update: function () {},

		data_load: function (text, data_main, ID, key) {
			console.log("Started loading data");

			try {
				data_main = JSON.parse(
					CryptoJS.AES.decrypt(text, "Imblend").toString(CryptoJS.enc.Utf8)
				);
				console.log("first layer decrypted successfully");
			} catch (error) {
				alert(
					"Couldnt decrypt layer1! check whether the URL syntax is correct eg : ?id=test&key=1234"
				);
			}
			this.data = data_main[ID];
			try {
				var Decypted = JSON.parse(
					CryptoJS.AES.decrypt(this.data, key).toString(CryptoJS.enc.Utf8)
				);
				console.log("second layer decrypted successfully");
			} catch (error) {
				alert(
					"Couldnt decrypt layer2! check whether the URL syntax is correct eg : ?id=test&key=1234"
				);
			}
			this.data = Decypted;
		},

		load_src: function (text) {
			console.log("Started loading src");
			this.url = text;
			fetch(this.url)
				.then((response) => response.text())
				.then((text) =>
					this.data_load(text, this.data_main, this.ID, this.key)
				);
		},
	}
);
