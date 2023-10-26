class Validation {
  getValidateUsername(username) {
    const userCheck = /^[a-zA-Z0-9._-]{3,45}$/;
    if (username.match(" ") || "") {
      return false;
    } else if (username.match(userCheck)) {
      return true;
    } else {
      return false;
    }
  }

  getValidateFirstName(firstName) {
    const firsNameCheck = /^[a-zA-Z]{1,35}$/;
    if (firstName.match(" ") || "") {
      return false;
    } else if (firstName.match(firsNameCheck)) {
      return true;
    } else {
      return false;
    }
  }

  getValidateLastName(lastName) {
    const lastNameCheck = /^[a-zA-Z]{1,35}$/;
    if (lastName.match(" ") || "") {
      return false;
    } else if (lastName.match(lastNameCheck)) {
      return true;
    } else {
      return false;
    }
  }

  getValidatePhoneNumber(phoneNumber) {
    const phoneNumberCheck = /^([06,08,09]{2})\d{8}$/;
    if (phoneNumber.match(" ") || "") {
      return false;
    } else if (phoneNumber.match(phoneNumberCheck)) {
      return true;
    } else {
      return false;
    }
  }

  getValidatePassword(password) {
    const pwdCheck = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,128}$/;

    if (password.match(" ") || "") {
      return false;
    } else if (password.match(pwdCheck)) {
      return true;
    } else {
      return false;
    }
  }

  getValidateConfirmPassword(password, confirmPass) {
    if (password === confirmPass) {
      return true;
    } else {
      return false;
    }
  }

  getValidateEmail(email) {
    const emailCheck = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (email.match(" ") || "") {
      return false;
    } else if (email.match(emailCheck)) {
      return true;
    } else {
      return false;
    }
  }

  getValidateInput(input) {
    const inputCheck = /^[a-zA-Z0-9#?!@$ %^&*._-]{1,128}$/;
    if (input.match(" ") || "") {
      return false;
    } else if (input.match(inputCheck)) {
      return true;
    } else {
      return false;
    }
  }
}

export default new Validation();
