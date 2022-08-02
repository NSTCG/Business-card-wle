WL.registerComponent(
	"button",
	{
		buttonMeshObject: { type: WL.Type.Object },
		hoverMaterial: { type: WL.Type.Material },
		DataFetch: { type: WL.Type.Object },
	},
	{
		start: function () {
			//this.data = this.dataFetchComponent.getComponent("data-api").data;

			this.mesh = this.buttonMeshObject.getComponent("mesh");
			this.defaultMaterial = this.mesh.material;

			this.target = this.object.getComponent("cursor-target");
			this.target.addHoverFunction(this.onHover.bind(this));
			this.target.addUnHoverFunction(this.onUnHover.bind(this));
			this.target.addDownFunction(this.onDown.bind(this));
			this.target.addUpFunction(this.onUp.bind(this));

			this.soundClick = this.object.addComponent("howler-audio-source", {
				src: "sfx/click.wav",
				spatial: true,
			});
			this.soundUnClick = this.object.addComponent("howler-audio-source", {
				src: "sfx/unclick.wav",
				spatial: true,
			});
		},

		onHover: function (_, cursor) {
			this.buttonMeshObject.translate([0.0, -0.1, 0.0]);
			if (cursor.type == "finger-cursor") {
				this.onDown(_, cursor);
			}

			this.hapticFeedback(cursor.object, 0.5, 50);
		},

		onDown: function (_, cursor) {
			this.dataObject = this.DataFetch || this.object.parent.children[6];
			this.data = this.dataObject.getComponent("data-api").data;

			this.soundClick.play();

			if (this.object.name == "instagram")
				window.open(this.data["Instagram ID"], "_blank");
			if (this.object.name == "linkedIn")
				window.open(this.data["LinkedIn ID"], "_blank");
			if (this.object.name == "website")
				window.open(this.data["Website"], "_blank");
			if (this.object.name == "call")
				window.open("tel:" + this.data["Telephone"].toString());
			if (this.object.name == "mail")
				window.open("mailto:" + this.data["Mail"]);
			if (this.object.name == "location")
				if (this.data["Location"] != null)
					window.open(this.data["Location"], "_blank");

			this.hapticFeedback(cursor.object, 1.0, 20);
		},

		onUp: function (_, cursor) {
			this.soundUnClick.play();
			this.hapticFeedback(cursor.object, 0.7, 20);
		},

		onUnHover: function (_, cursor) {
			this.buttonMeshObject.translate([0.0, 0.1, 0.0]);
			if (cursor.type == "finger-cursor") {
				this.onUp(_, cursor);
			}

			this.hapticFeedback(cursor.object, 0.3, 50);
		},

		hapticFeedback: function (object, strenght, duration) {
			const input = object.getComponent("input");
			if (input && input.xrInputSource) {
				const gamepad = input.xrInputSource.gamepad;
				if (gamepad && gamepad.hapticActuators)
					gamepad.hapticActuators[0].pulse(strenght, duration);
			}
		},
	}
);
