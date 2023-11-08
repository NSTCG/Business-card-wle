import {
	ImageTracking,
	ImageTrackingTarget,
} from "@wonderlandengine/mind-ar-tracking";
import {CollisionComponent} from "@wonderlandengine/api";
import {vec3, quat, quat2, mat4} from 'gl-matrix';

const ZERO = [0, 0, 0];
const tempQuat = quat.create();
const tempQuat2 = quat2.create();
const tempVec3 = vec3.create();

/**
 * image-tracking-collision-target
 */
export class ImageTrackingCollisionTarget extends ImageTrackingTarget {
	static TypeName = "image-tracking-collision-target";
	/* Properties that are configurable in the editor */
	static InheritProperties = true;
}
