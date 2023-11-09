import {
	Component,
	InputComponent,
	MeshComponent,
	Property,
} from "@wonderlandengine/api";
import {CursorTarget, HowlerAudioSource} from "@wonderlandengine/components";
import { DataApi } from './data-api';


/**
 * Helper function to trigger haptic feedback pulse.
 *
 * @param {Object} object An object with 'input' component attached
 * @param {number} strength Strength from 0.0 - 1.0
 * @param {number} duration Duration in milliseconds
 */
export function hapticFeedback(object, strength, duration) {
	const input = object.getComponent(InputComponent);
	if (input && input.xrInputSource) {
		const gamepad = input.xrInputSource.gamepad;
		if (gamepad && gamepad.hapticActuators)
			gamepad.hapticActuators[0].pulse(strength, duration);
	}
}

/**
 * Button component.
 *
 * Shows a 'hoverMaterial' on cursor hover, moves backward on cursor down,
 * returns to its position on cursor up, plays click/unclick sounds and haptic
 * feedback on hover.
 *
 * Use `target.onClick.add(() => {})` on the `cursor-target` component used
 * with the button to define the button's action.
 *
 * Supports interaction with `finger-cursor` component for hand tracking.
 */
export class ButtonComponent extends Component {
	static TypeName = "button";
	static Properties = {
		/** Object that has the button's mesh attached */
		buttonMeshObject: Property.object(),
		/** Material to apply when the user hovers the button */
		hoverMaterial: Property.material(),
		DataFetch: Property.object(),
	};

	static onRegister(engine) {
		engine.registerComponent(HowlerAudioSource);
		engine.registerComponent(CursorTarget);
	}

	/* Position to return to when "unpressing" the button */
	returnPos = new Float32Array(3);

	start() {
		this.mesh = this.buttonMeshObject.getComponent(MeshComponent);
		this.defaultMaterial = this.mesh.material;
		this.buttonMeshObject.getTranslationLocal(this.returnPos);

		this.target =
			this.object.getComponent(CursorTarget) ||
			this.object.addComponent(CursorTarget);

		this.soundClick = this.object.addComponent(HowlerAudioSource, {
			src: "sfx/click.wav",
			spatial: true,
		});
		this.soundUnClick = this.object.addComponent(HowlerAudioSource, {
			src: "sfx/unclick.wav",
			spatial: true,
		});
		this.dataObject = this.DataFetch || this.object.parent.children[6];
	}

	onActivate() {
		this.target.onHover.add(this.onHover);
		this.target.onUnhover.add(this.onUnhover);
		this.target.onDown.add(this.onDown);
		this.target.onUp.add(this.onUp);
	}

	onDeactivate() {
		this.target.onHover.remove(this.onHover);
		this.target.onUnhover.remove(this.onUnhover);
		this.target.onDown.remove(this.onDown);
		this.target.onUp.remove(this.onUp);
	}

	/* Called by 'cursor-target' */
	onHover = (_, cursor) => {
		//this.mesh.material = this.hoverMaterial;
		this.mesh.material.color = [1,1,1,0.8]
		if (cursor.type === "finger-cursor") {
			this.onDown(_, cursor);
		}

		hapticFeedback(cursor.object, 0.5, 50);
	};

	/* Called by 'cursor-target' */
	onDown = (_, cursor) => {
		this.soundClick.play();
		this.buttonMeshObject.translate([0.0, -0.1, 0.0]);
		hapticFeedback(cursor.object, 1.0, 20);

		
		this.data = this.dataObject.getComponent(DataApi).data

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
		if (this.object.name == "vcf") {
				this.handleVCF();
			}
	};

	/* Called by 'cursor-target' */
	onUp = (_, cursor) => {
		this.soundUnClick.play();
		this.buttonMeshObject.setTranslationLocal(this.returnPos);
		hapticFeedback(cursor.object, 0.7, 20);
	};

	/* Called by 'cursor-target' */
	onUnhover = (_, cursor) => {
		this.mesh.material.color = [1,1,1,1]
		if (cursor.type === "finger-cursor") {
			this.onUp(_, cursor);
		}

		hapticFeedback(cursor.object, 0.3, 50);
	};
	generateVCF(data) {
		const vcfData = `BEGIN:VCARD
VERSION:3.0
FN:${data["Name"] + " " + data["Surname"]}
TEL:${data["Telephone"]}
EMAIL:${data["Mail"]}
URL:${data["Website"]}
END:VCARD`;

		return vcfData;
	}

	handleVCF() {
		this.data = this.dataObject.getComponent(DataApi).data;
		console.log(this.data);
		const vcfData = this.generateVCF(this.data);
		console.log(vcfData);
		// Create a Blob with the VCF data
		const vcfBlob = new Blob([vcfData], {type: "text/vcard"});

		// Create a URL for the Blob
		const vcfURL = URL.createObjectURL(vcfBlob);

		// Create an anchor element to trigger the download
		const downloadLink = document.createElement("a");
		downloadLink.href = vcfURL;
		downloadLink.download = "contact.vcf";
		downloadLink.click();

		// Revoke the URL to release the resources
		URL.revokeObjectURL(vcfURL);
	}
}
