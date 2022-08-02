WL.registerComponent(
	"data-api",
	{
		url: {
			type: WL.Type.String,
			default: "https://wlebusinesscard.netlify.app/json/final.txt",
		},
	},
	{
		init: function () {
			// fetch ID and Key from URL
			if (window.location.search != "") {
				try {
					var ID = window.location.search
						.split("?")[1]
						.split("&")[0]
						.split("=")[1];
					var key = window.location.search
						.split("?")[1]
						.split("&")[1]
						.split("=")[1];
					console.log("your User ID = " + ID + "\n" + "Your User Key = " + key);
				} catch (err) {
					console.error(
						"Could not detect id and key, check whether the syntax is correct eg : ?id=test&key=1234"
					);
					alert(
						"Could not detect id and key, check whether the URL syntax is correct eg : ?id=test&key=1234"
					);
				}
			}
			var data_main;

			fetch(this.url)
				.then((response) => response.text())
				.then((text) => this.data_load(text, data_main, ID, key));
			// outputs the content of the text file
		},
		start: function () {
			this.dataread = 0;
		},
		update: function () {
			if (this.dataread == 0) {
				try {
					console.log("data loaded successfully" + data);
				} catch (error) {
					console.warn(
						"Can't fetch data ! Ensure your URL contains valid ID and password variables "
					);
				}

				this.dataread = 1;
			}
		},
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
			data = data_main[ID];
			try {
				var Decypted = JSON.parse(
					CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8)
				);
				console.log("second layer decrypted successfully");
			} catch (error) {
				alert(
					"Couldnt decrypt layer2! check whether the URL syntax is correct eg : ?id=test&key=1234"
				);
			}
			this.data = Decypted;
		},
	}
);
