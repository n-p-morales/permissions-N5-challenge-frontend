import { ApiRequestFactory } from '../utils/ApiRequestFactory';

const getPermissionsService = async (Id, onSuccessCallback, onErrorCallback) => {
    await ApiRequestFactory
        .get(`/Permissions/GetPermissions?Id=${Id}`)
        .then((response) => onSuccessCallback(response))
        .catch((error) => onErrorCallback(error));
};

const getPermissionsByIdService = async (Id, onSuccessCallback, onErrorCallback) => {
    await ApiRequestFactory
        .get(`/Permissions/GetPermissionsById?Id=${Id}`)
        .then((response) => onSuccessCallback(response))
        .catch((error) => onErrorCallback(error));
};

const createPermissionsService = async (data, onSuccessCallback, onErrorCallback) => {
    await ApiRequestFactory
        .post('/Permissions/CreatePermissions', data)
        .then((response) => onSuccessCallback(response))
        .catch((error) => onErrorCallback(error));
};

const updatePermissionsService = async (data, onSuccessCallback, onErrorCallback) => {
    await ApiRequestFactory
        .post('/Permissions/UpdatePermissions', data)
        .then((response) => onSuccessCallback(response))
        .catch((error) => onErrorCallback(error));
};

const getPermissionsTypeServices = async (Id, onSuccessCallback, onErrorCallback) => {
    await ApiRequestFactory
        .get(`/PermissionsType/GetPermissionsType?Id=${Id}`)
        .then((response) => onSuccessCallback(response))
        .catch((error) => onErrorCallback(error));
};

const getPermissionsTypeByIdServices = async (Id, onSuccessCallback, onErrorCallback) => {
    await ApiRequestFactory
        .get(`/PermissionsType/GetPermissionsTypeById?Id=${Id}`)
        .then((response) => onSuccessCallback(response))
        .catch((error) => onErrorCallback(error));
};

const createPermissionsTypeService = async (data, onSuccessCallback, onErrorCallback) => {
    await ApiRequestFactory
        .post('/PermissionsType/CreatePermissionsType', data)
        .then((response) => onSuccessCallback(response))
        .catch((error) => onErrorCallback(error));
};

const updatePermissionsTypeService = async (data, onSuccessCallback, onErrorCallback) => {
    await ApiRequestFactory
        .post('/PermissionsType/UpdatePermissionsType', data)
        .then((response) => onSuccessCallback(response))
        .catch((error) => onErrorCallback(error));
};

export { 
    getPermissionsService,
    getPermissionsByIdService,
    createPermissionsService,
    updatePermissionsService,
    getPermissionsTypeServices,
    getPermissionsTypeByIdServices,
    createPermissionsTypeService,
    updatePermissionsTypeService,
}