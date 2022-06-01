class ResponseDTO {
    constructor(result, message, status) {
        this.result = result;
        this.message = message;
        this.status = status;
    }
}

module.exports = ResponseDTO;
