// Particle.js
import Shape from './Shape';
import Vec3 from '../math/Vec3';

class Particle extends Shape {
    constructor() {
        // Call the parent class constructor (Shape) with the PARTICLE type
        super({ type: Shape.types.PARTICLE });
    }

    /**
     * Calculate the local inertia for the particle
     * @param {Number} mass
     * @param {Vec3} target
     * @return {Vec3}
     */
    calculateLocalInertia(mass, target = new Vec3()) {
        target.set(0, 0, 0);
        return target;
    }

    /**
     * Return the volume of the particle (always 0)
     * @return {Number}
     */
    volume() {
        return 0;
    }

    /**
     * Update the bounding sphere radius (always 0)
     */
    updateBoundingSphereRadius() {
        this.boundingSphereRadius = 0;
    }

    /**
     * Calculate the world axis-aligned bounding box (AABB)
     * @param {Vec3} pos
     * @param {Quat} quat
     * @param {Vec3} min
     * @param {Vec3} max
     */
    calculateWorldAABB(pos, quat, min, max) {
        min.copy(pos);
        max.copy(pos);
    }
}

// Export the Particle class
export default Particle;
