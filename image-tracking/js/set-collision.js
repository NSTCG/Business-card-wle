import {CollisionComponent, Component} from '@wonderlandengine/api';

/**
 * set-collision
 */
export class SetCollision extends Component {
    static TypeName = 'set-collision';
    /* Properties that are configurable in the editor */
    static Properties = {
    };

    update(dt) {
        if(this.object.getScalingWorld([])[0] === 0){
           this.object.getComponent(CollisionComponent).active=false;
        }
        else{
            this.object.getComponent(CollisionComponent).active=true;
        }
    }
}
