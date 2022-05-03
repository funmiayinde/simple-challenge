import _ from 'lodash';

/**
 * The App Error class
 */
class AppError extends Error {
    /**
     * 
     * @param {String} message The error message
     * @param {Number} code The status code of the error
     * @param {Object} messages The optional error message
     */
    constructor(message, code, messages = null) {
        super(message);
        this._code = code;
        if (messages) {
            this._messages = messages;
        }
    }

    /**
     * @return {Number}
     */
    get code() {
        return this._code;
    }

    /**
     * @return  {String}
     */
    get message() {
        return this._message;
    }

    /**
     * @return  {String}
     */
    get messages() {
        return this._messages;
    }

    /**
     * @return {Object} The instance of AppError
     */
    format() {
        const obj = { code: this._code, message: this.message };
        if (this._messages) {
            const messages = this._messages.errors || this._messages;
            _.extend(obj, { messages });
        }
        return obj;
    }

}

export default AppError;