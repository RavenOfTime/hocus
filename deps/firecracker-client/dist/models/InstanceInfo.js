"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Firecracker API
 * RESTful public-facing API. The API is accessible through HTTP calls on specific URLs carrying JSON modeled data. The transport medium is a Unix Domain Socket.
 *
 * The version of the OpenAPI document: 1.1.2
 * Contact: compute-capsule@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceInfoToJSON = exports.InstanceInfoFromJSONTyped = exports.InstanceInfoFromJSON = exports.instanceOfInstanceInfo = exports.InstanceInfoStateEnum = void 0;
/**
 * @export
 */
exports.InstanceInfoStateEnum = {
    NotStarted: 'Not started',
    Running: 'Running',
    Paused: 'Paused'
};
/**
 * Check if a given object implements the InstanceInfo interface.
 */
function instanceOfInstanceInfo(value) {
    let isInstance = true;
    isInstance = isInstance && "appName" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "vmmVersion" in value;
    return isInstance;
}
exports.instanceOfInstanceInfo = instanceOfInstanceInfo;
function InstanceInfoFromJSON(json) {
    return InstanceInfoFromJSONTyped(json, false);
}
exports.InstanceInfoFromJSON = InstanceInfoFromJSON;
function InstanceInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appName': json['app_name'],
        'id': json['id'],
        'state': json['state'],
        'vmmVersion': json['vmm_version'],
    };
}
exports.InstanceInfoFromJSONTyped = InstanceInfoFromJSONTyped;
function InstanceInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'app_name': value.appName,
        'id': value.id,
        'state': value.state,
        'vmm_version': value.vmmVersion,
    };
}
exports.InstanceInfoToJSON = InstanceInfoToJSON;