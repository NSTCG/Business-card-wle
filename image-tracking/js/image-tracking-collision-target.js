import {
	ImageTracking,
	ImageTrackingTarget,
} from "@wonderlandengine/mind-ar-tracking";
import {CollisionComponent} from "@wonderlandengine/api";
import {quat2} from "gl-matrix";

/**
 * image-tracking-collision-target
 */
export class ImageTrackingCollisionTarget extends ImageTrackingTarget {
	static TypeName = "image-tracking-collision-target";
	/* Properties that are configurable in the editor */
	static InheritProperties = true;
	init() {
		this.arCamera
			.getComponent(ImageTracking)
			.registerTarget(this.targetIndex, this);
		this.object.setScalingLocal([0, 0, 0]);
		this.object.setDirty();
		this.scale_flag = false;
	}

	updateTrack(worldMatrix, markerWidth, markerHeight) {
		if (!worldMatrix) {
			this.object.setScalingLocal([0, 0, 0]);
			this.object.setDirty();
			return;
		}
		quat2.fromMat4(this.object.transformLocal, worldMatrix);
		quat2.normalize(this.object.transformLocal, this.object.transformLocal);
		this.object.translateObject([markerWidth / 2, markerHeight / 2, 0]);
		const mw = markerWidth / window.devicePixelRatio;
		this.object.setScalingLocal([mw, mw, mw]);
		if (this.scale_flag == false) {
			console.warn("entered update track ");
			this.affectChildren = true;
			this.collisions = [];
			this.getComponents(this.object);
			console.log(this.collisions);
			this.setCollisionScale(this.object.getScalingLocal([])[0] / 1.5);
			this.scale_flag = true;
		}
		this.object.setDirty();
	}

	update() {}

	getComponents(obj) {
		try {
			if (obj.getComponent(CollisionComponent) != null)
				this.collisions = this.collisions.concat(obj);
		} catch (err) {
			console.log(err);
		}
		if (this.affectChildren) {
			let children = obj.children;
			for (let i = 0; i < children.length; ++i) {
				this.getComponents(children[i]);
			}
		}
	}

	setCollisionScale(scale) {
		const comps = this.collisions;

		for (let i = 0; i < comps.length; ++i) {
			let collision = comps[i].getComponent(CollisionComponent);
			//let physx = comps[i].getComponent(PhysXComponent);

			if (collision) {
				collision.radius = scale / 1.2;
				console.warn(collision);
			}
		}
	}
}
