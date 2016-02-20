require('Joint');

FrictionJoint = cc.Class({

    extends: Joint,

    properties: {
        maxForce: {
            default: 0,
        },
        maxTorque: {
            default: 0,
        },
    },

    // use this for initialization
    start: function () {
        this.initJoint();

        var jointDef = new b2FrictionJointDef();
        jointDef.bodyA = this.localBody;
        jointDef.bodyB = this.targetBody;
        jointDef.localAnchorA = this.localAnchor;
        jointDef.localAnchorB = this.targetAnchor;
        jointDef.collideConnected = this.enableCollision;
        jointDef.maxTorque = this.maxTorque;
        jointDef.maxForce = this.maxForce;
        
        this.joint = Box2D_Engine.instance.world.CreateJoint(jointDef);
    },
});