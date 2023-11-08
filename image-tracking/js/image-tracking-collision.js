import {ImageTracking} from "@wonderlandengine/mind-ar-tracking";
import { mat4,vec3 } from "gl-matrix";

/**
 * image-tracking-coliision
 */
export class ImageTrackingCollision extends ImageTracking {
	static TypeName = "image-tracking";
	/* Properties that are configurable in the editor */
	static InheritProperties = true;
}
