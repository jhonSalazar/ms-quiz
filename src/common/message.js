const Const = require("./const")
module.exports = {
    getLogMessageCreateSuccess: (result) => {
        return `${Const.NAME_MODEL} successfully created result: ${JSON.stringify(result)} `;
    },
    getLogMessageCreateError: (result) => {
        //const body = JSON.stringify(result);
        return `${Const.NAME_MODEL} not created body: ${JSON.stringify(result)} `;
    },
    getMessageCreateSuccess: () => {
        return `${Const.NAME_MODEL} successfully created`;
    },
    getMessageCreateNotSuccess: () => {
        return `${Const.NAME_MODEL} not created`;
    },
    getMessageCatchErrorCreateNotSuccess: (body, err) => {
        return `ERROR: error trying to create ${Const.NAME_MODEL}: ${JSON.stringify(body)}  msj: ${err}`;
    },
    getLogMessageGetOneSuccess: (result) => {
        return `${Const.NAME_MODEL} successfully found result: ${JSON.stringify(result)}`;
    },
    getMessageGetOneSuccess: () => {
        return `${Const.NAME_MODEL} successfully found`;
    },
    getLogMessageGetOneNotSuccess: (id) => {
        return `${Const.NAME_MODEL} not found id: ${id}`;
    },
    getMessageGetOneNotSuccess: () => {
        return `${Const.NAME_MODEL} not found`;
    },
    getLogMessageCatchErrorGetOneNotSuccess: (body, err) => {
        return `ERROR: error trying to getOne ${Const.NAME_MODEL}: ${JSON.stringify(body)}  msj: ${err}`;
    },
    getLogMessageGetAllSuccess: (result) => {
        return `${Const.NAME_MODEL} successfully found count: ${result.length}`
    },
    getLogMessageGetAllNoSuccess: () => {
        return `${Const.NAME_MODEL}s not found`;
    },
    getInternalServerError: () => {
        return `Ups! Internal Server Error`;
    },
    getLogMessageCatchErrorGetAllSuccess: (body, err) => {
        return `ERROR: error trying to getAll ${Const.NAME_MODEL}: ${JSON.stringify(body)}  msj: ${err}`;
    },
    getLogMessageRemovedSuccess: (id) => {
        return `${Const.NAME_MODEL} ${id} successfully removed`
    },
    getMessageRemoveSuccess: () => {
        return `${Const.NAME_MODEL} successfully removed`;
    },
    getMessageRemoveNoSuccess: () => {
        return `${Const.NAME_MODEL} not removed`;
    },
    getLogMessageRemoveNotSuccess: (id) => {
        return `${Const.NAME_MODEL} ${id} not removed`
    },
    getLogMessageCatchErrorRemoveNotSuccess: (body, err) => {
        return `ERROR: error trying to remove ${Const.NAME_MODEL}: ${JSON.stringify(body)}  msj: ${err}`
    },
    getLogMessageRemovedSuccess: (id) => {
        return `${Const.NAME_MODEL} ${id} successfully removed`
    },
    getMessageRemoveSuccess: () => {
        return `${Const.NAME_MODEL} successfully removed`;
    },
    getMessageRemoveNoSuccess: () => {
        return `${Const.NAME_MODEL} not removed`;
    },
    getLogMessageRemoveNotSuccess: (id) => {
        return `${Const.NAME_MODEL} ${id} not removed`
    },
    getLogMessageCatchErrorRemoveNotSuccess: (body, err) => {
        return `ERROR: error trying to remove ${Const.NAME_MODEL}: ${JSON.stringify(body)}  msj: ${err}`
    },
    //aca
    getLogMessageUpdateSuccess: (id, result) => {
        return `${Const.NAME_MODEL} ${id} successfully updated result: ${JSON.stringify(result)}`
    },
    getMessageUpdateSuccess: () => {
        return `${Const.NAME_MODEL} successfully updated`;
    },
    getMessageUpdateNotSuccess: () => {
        return `${Const.NAME_MODEL}  not updated`
    },
    getLogMessageUpdateNotSuccess: (id, body) => {
        return `${Const.NAME_MODEL} ${id} not updated body: ${JSON.stringify(body)}`
    },
    getMessageCatchError: (error) => {
        return {
            status: error.status || 500,
            timestamps: new Date(),
            message: error.message || 'Internal Server Error',
            stack: error.stack, //only dev environment,
            error: error //only dev environment,
        }
    },
    getMessageLogCatchError(error){
       return `ERROR - request processing error : ${error}
       status: ${error.status}
        error:${error.message}
         status:${error.status}
         stack: ${error.stack}`
    }
}