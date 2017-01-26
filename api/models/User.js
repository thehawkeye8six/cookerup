/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    full_name: {
      type: 'string',
      required: true
    },

    user_name: {
      type: 'string',
      required: true
    },

    user_passwd: {
      type: 'string',
      required: true
    },

    email_address: {
      type: 'string',
      email: true,
      required: true
    },
  }
};

